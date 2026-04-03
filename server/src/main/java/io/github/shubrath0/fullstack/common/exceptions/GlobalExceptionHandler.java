package io.github.shubrath0.fullstack.common.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.github.shubrath0.fullstack.api.user.exceptions.InvalidCredentialsException;
import io.github.shubrath0.fullstack.api.user.exceptions.UsernameAlreadyTakenException;
import io.github.shubrath0.fullstack.common.dto.ApiResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse<String>> handleRuntime(RuntimeException ex) {
        log.error("CRITICAL UNCAUGHT ERROR: ", ex);
        return ApiResponse.error(HttpStatus.INTERNAL_SERVER_ERROR, "An error occured.");
    }

    @ExceptionHandler(UsernameAlreadyTakenException.class)
    public ResponseEntity<ApiResponse<String>> handleUsernameAlreadyTaken(UsernameAlreadyTakenException ex) {
        return ApiResponse.error(HttpStatus.CONFLICT, ex.getMessage());
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ApiResponse<String>> handleInvaildCredentials(InvalidCredentialsException ex) {
        return ApiResponse.error(HttpStatus.BAD_REQUEST, ex.getMessage());
    }
}