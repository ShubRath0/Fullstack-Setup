package io.github.shubrath0.fullstack.api.user;

import org.springframework.stereotype.Service;

import io.github.shubrath0.fullstack.api.user.dto.UserDTO;
import io.github.shubrath0.fullstack.api.user.dto.UserMapper;
import io.github.shubrath0.fullstack.api.user.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repository;
    private final UserMapper userMapper;

    public UserDTO getUser(String email) {
        User user = repository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException(email));

        return userMapper.toDto(user);
    }
}
