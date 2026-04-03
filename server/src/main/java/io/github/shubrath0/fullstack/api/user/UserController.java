package io.github.shubrath0.fullstack.api.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.github.shubrath0.fullstack.api.user.dto.UserDTO;
import io.github.shubrath0.fullstack.api.user.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.user.dto.request.LoginRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping("/signup")
    public UserDTO createAccount(@RequestBody CreateUserRequest request) {
        UserDTO response = service.createUser(request);
        return response;
    }

    @GetMapping("/login")
    public UserDTO login(@RequestBody LoginRequest request) {
        UserDTO response = service.login(request);
        return response;
    }

}
