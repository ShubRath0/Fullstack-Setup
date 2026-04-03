package io.github.shubrath0.fullstack.api.user.dto.request;

public record CreateUserRequest(
        String email,
        String username,
        String password) {

}
