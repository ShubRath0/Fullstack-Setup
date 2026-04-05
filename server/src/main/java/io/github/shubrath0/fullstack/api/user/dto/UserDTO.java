package io.github.shubrath0.fullstack.api.user.dto;

import io.github.shubrath0.fullstack.api.auth.enums.Role;

public record UserDTO(
        Integer id,
        String email,
        Role role) {
}
