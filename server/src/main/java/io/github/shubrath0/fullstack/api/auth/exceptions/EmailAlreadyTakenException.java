package io.github.shubrath0.fullstack.api.auth.exceptions;

public class EmailAlreadyTakenException extends RuntimeException {
    public EmailAlreadyTakenException(String email) {
        super("Email " + email + " is aready taken!");
    }
}
