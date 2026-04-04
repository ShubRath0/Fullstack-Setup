package io.github.shubrath0.fullstack.common.dto;

import java.time.Instant;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public record ApiResponse<T>(
        Integer status,
        Boolean success,
        String message,
        Instant timestamp,
        List<FieldError> fieldErrors,
        T data) {
    public static <T> ResponseEntity<ApiResponse<T>> success(HttpStatus status, String message, T data) {
        return ResponseEntity.status(status).body(
                new ApiResponse<T>(
                        status.value(),
                        true,
                        message,
                        Instant.now(),
                        null,
                        data));
    }

    public static <T> ResponseEntity<ApiResponse<T>> error(HttpStatus status, String message,
            List<FieldError> fieldErrors) {
        return ResponseEntity.status(status).body(
                new ApiResponse<T>(
                        status.value(),
                        false,
                        message,
                        Instant.now(),
                        fieldErrors,
                        null));
    }

    public static <T> ResponseEntity<ApiResponse<T>> error(HttpStatus status, String message) {
        return ResponseEntity.status(status).body(
                new ApiResponse<T>(
                        status.value(),
                        false,
                        message,
                        Instant.now(),
                        null,
                        null));
    }
}
