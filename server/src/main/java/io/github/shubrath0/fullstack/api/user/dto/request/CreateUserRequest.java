package io.github.shubrath0.fullstack.api.user.dto.request;

public record CreateUserRequest(
        String username,
        String password) {

}
