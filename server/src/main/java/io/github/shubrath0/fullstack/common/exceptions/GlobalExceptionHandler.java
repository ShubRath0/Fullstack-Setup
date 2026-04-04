package io.github.shubrath0.fullstack.common.exceptions;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import io.github.shubrath0.fullstack.api.auth.exceptions.InvalidCredentialsException;
import io.github.shubrath0.fullstack.api.auth.exceptions.UsernameAlreadyTakenException;
import io.github.shubrath0.fullstack.common.dto.ApiResponse;
import io.github.shubrath0.fullstack.common.dto.FieldError;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse<String>> handleRuntime(RuntimeException ex) {
        log.error("CRITICAL UNCAUGHT ERROR: ", ex);
        return ApiResponse.error(HttpStatus.INTERNAL_SERVER_ERROR, "An error occured.");
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<List<FieldError>>> handleFieldErrors(MethodArgumentNotValidException ex) {
        List<FieldError> fieldErrors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> new FieldError(error.getField(), error.getDefaultMessage()))
                .toList();

        return ApiResponse.error(HttpStatus.BAD_REQUEST, "Validation Failed", fieldErrors);
    }

    @ExceptionHandler(UsernameAlreadyTakenException.class)
    public ResponseEntity<ApiResponse<String>> handleUsernameAlreadyTaken(UsernameAlreadyTakenException ex) {
        return ApiResponse.error(HttpStatus.CONFLICT, ex.getMessage());
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ApiResponse<String>> handleInvaildCredentials(InvalidCredentialsException ex) {
        return ApiResponse.error(HttpStatus.BAD_REQUEST, ex.getMessage());
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ApiResponse<String>> handleInvalidAccess(AccessDeniedException ex) {
        return ApiResponse.error(HttpStatus.BAD_REQUEST, ex.getMessage());
    }
}