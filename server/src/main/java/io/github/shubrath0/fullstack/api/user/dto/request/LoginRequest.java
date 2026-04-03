package io.github.shubrath0.fullstack.api.user.dto.request;

public record LoginRequest(
        String username,
        String password) {

}
