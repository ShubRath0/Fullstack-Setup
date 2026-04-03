package io.github.shubrath0.fullstack.api.user.dto;

import io.github.shubrath0.fullstack.api.user.User;

public record UserDTO(
        Integer id,
        String username) {
    public static UserDTO fromEntity(User user) {
        return new UserDTO(
                user.getId(),
                user.getUsername());
    }
}
