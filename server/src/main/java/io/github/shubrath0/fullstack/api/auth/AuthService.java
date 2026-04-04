package io.github.shubrath0.fullstack.api.auth;

import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.shubrath0.fullstack.api.auth.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.auth.dto.request.LoginRequest;
import io.github.shubrath0.fullstack.api.auth.dto.response.AuthenticationResponse;
import io.github.shubrath0.fullstack.api.auth.exceptions.InvalidCredentialsException;
import io.github.shubrath0.fullstack.api.auth.exceptions.UsernameAlreadyTakenException;
import io.github.shubrath0.fullstack.api.user.User;
import io.github.shubrath0.fullstack.api.user.UserRepository;
import io.github.shubrath0.fullstack.api.user.dto.UserMapper;
import io.github.shubrath0.fullstack.security.JwtService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;
    private final JwtService jwtService;

    @Transactional
    public AuthenticationResponse createUser(CreateUserRequest request) {
        if (repository.existsByUsername(request.username())) {
            throw new UsernameAlreadyTakenException(request.username());
        }

        User user = userMapper.toEntity(request);
        User savedUser = repository.save(user);

        String jwtToken = jwtService.generateToken(savedUser);

        return new AuthenticationResponse(jwtToken, userMapper.toDto(savedUser));
    }

    @Transactional(readOnly = true)
    public AuthenticationResponse login(LoginRequest request) {
        Optional<User> user = repository.findByUsername(request.username());

        User foundUser = user.orElseThrow(InvalidCredentialsException::new);
        if (!passwordEncoder.matches(request.password(), foundUser.getPassword())) {
            throw new InvalidCredentialsException();
        }

        String jwtToken = jwtService.generateToken(foundUser);

        return new AuthenticationResponse(jwtToken, userMapper.toDto(foundUser));
    }
}