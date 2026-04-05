package io.github.shubrath0.fullstack.api.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.shubrath0.fullstack.api.auth.dto.request.CreateUserRequest;
import io.github.shubrath0.fullstack.api.auth.dto.request.LoginRequest;
import io.github.shubrath0.fullstack.api.auth.dto.response.AuthenticationResponse;
import io.github.shubrath0.fullstack.api.user.UserService;
import io.github.shubrath0.fullstack.api.user.dto.UserDTO;
import io.github.shubrath0.fullstack.common.dto.ApiResponse;
import io.github.shubrath0.fullstack.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService service;
    private final UserService userService;
    private final JwtService jwtService;

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
    @GetMapping("/me")
    public ResponseEntity<ApiResponse<UserDTO>> verify(Authentication authentication) {
        String email = authentication.getName();
        UserDTO user = userService.getUser(email);
        return ApiResponse.success(HttpStatus.OK, "Success", user);
    }

    @PreAuthorize("hasRole('USER')")
    @GetMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(
            @RequestHeader(name = "Authorization", required = false) String authHeader) {
        jwtService.blacklistToken(authHeader);
        return ApiResponse.success(HttpStatus.OK, "Logout successful", null);
    }

}
