package io.github.shubrath0.fullstack.api.auth.exceptions;

public class UsernameAlreadyTakenException extends RuntimeException {
    public UsernameAlreadyTakenException(String username) {
        super("Username " + username + " is aready taken!");
    }
}
