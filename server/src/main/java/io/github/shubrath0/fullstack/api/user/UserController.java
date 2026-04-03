package io.github.shubrath0.fullstack.api.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.github.shubrath0.fullstack.api.user.dto.UserDTO;
import io.github.shubrath0.fullstack.api.user.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.user.dto.request.LoginRequest;
import io.github.shubrath0.fullstack.api.user.dto.response.AuthenticationResponse;
import io.github.shubrath0.fullstack.common.dto.ApiResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> createAccount(@RequestBody CreateUserRequest request) {
        AuthenticationResponse response = service.createUser(request);
        return ApiResponse.success(HttpStatus.CREATED, "Account created successfully!", response);
    }

    @GetMapping("/login")
    public UserDTO login(@RequestBody LoginRequest request) {
        UserDTO response = service.login(request);
        return response;
    }

    @GetMapping("/test")
    public String test() {
        return "Success";
    }
}
