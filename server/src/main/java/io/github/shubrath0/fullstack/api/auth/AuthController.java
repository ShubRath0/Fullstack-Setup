package io.github.shubrath0.fullstack.api.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.shubrath0.fullstack.api.auth.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.auth.dto.request.LoginRequest;
import io.github.shubrath0.fullstack.api.auth.dto.response.AuthenticationResponse;
import io.github.shubrath0.fullstack.common.dto.ApiResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService service;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> createAccount(
            @Valid @RequestBody CreateUserRequest request) {
        AuthenticationResponse response = service.createUser(request);
        return ApiResponse.success(HttpStatus.CREATED, "Account created successfully!", response);
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<AuthenticationResponse>> login(@Valid @RequestBody LoginRequest request) {
        AuthenticationResponse response = service.login(request);
        return ApiResponse.success(HttpStatus.OK, "Log in successful", response);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping("/test")
    public ResponseEntity<ApiResponse<Void>> test() {
        return ApiResponse.success(HttpStatus.OK, "You have user role!", null);
    }
}
