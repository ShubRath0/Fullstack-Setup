package io.github.shubrath0.fullstack.api.user.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String email) {
        super("User with email " + email + " was not found");
    }
}
