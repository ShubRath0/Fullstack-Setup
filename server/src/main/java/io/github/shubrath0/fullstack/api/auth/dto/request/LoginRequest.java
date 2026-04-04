package io.github.shubrath0.fullstack.api.auth.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginRequest(
        @NotBlank @Size(min = 3, max = 20, message = "Username must be between 3 and 20 characters") String email,
        @NotBlank @Size(min = 8, max = 100, message = "Password must be at least 8 characters") String password) {

}
