package io.github.shubrath0.fullstack.common.dto;

import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public record ApiResponse<T>(
        Integer status,
        Boolean success,
        String message,
        T data,
        Instant timestamp) {
    public static <T> ResponseEntity<ApiResponse<T>> success(HttpStatus status, String message, T data) {
        return ResponseEntity.status(status).body(
                new ApiResponse<T>(
                        status.value(),
                        true,
                        message,
                        data,
                        Instant.now()));
    }

    public static <T> ResponseEntity<ApiResponse<T>> error(HttpStatus status, String message) {
        return ResponseEntity.status(status).body(
                new ApiResponse<T>(
                        status.value(),
                        false,
                        message,
                        null,
                        Instant.now()));
    }
}
