package io.github.shubrath0.fullstack.api.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
    Boolean existsByEmail(String username);

    Optional<User> findByEmail(String email);
}