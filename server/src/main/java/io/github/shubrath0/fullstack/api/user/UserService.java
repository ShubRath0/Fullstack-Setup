package io.github.shubrath0.fullstack.api.user;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import io.github.shubrath0.fullstack.api.user.dto.UserDTO;
import io.github.shubrath0.fullstack.api.user.dto.UserMapper;
import io.github.shubrath0.fullstack.api.user.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.user.dto.request.LoginRequest;
import io.github.shubrath0.fullstack.api.user.exceptions.InvalidCredentialsException;
import io.github.shubrath0.fullstack.api.user.exceptions.UsernameAlreadyTakenException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    @Transactional
    public UserDTO createUser(CreateUserRequest request) {
        if (repository.existsByUsername(request.username())) {
            throw new UsernameAlreadyTakenException(request.username());
        }

        User user = userMapper.toEntity(request);
        User savedUser = repository.save(user);

        return userMapper.toDto(savedUser);
    }

    @Transactional(readOnly = true)
    public UserDTO login(LoginRequest request) {
        User user = repository.findByUsername(request.username());

        if (user == null || !passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new InvalidCredentialsException();
        }

        return userMapper.toDto(user);
    }
}