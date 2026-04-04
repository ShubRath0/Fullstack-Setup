package io.github.shubrath0.fullstack.api.auth.dto.response;

import io.github.shubrath0.fullstack.api.user.dto.UserDTO;

public record AuthenticationResponse(
        String token,
        UserDTO user) {

}
