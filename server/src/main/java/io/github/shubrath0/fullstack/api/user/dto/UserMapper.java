package io.github.shubrath0.fullstack.api.user.dto;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import io.github.shubrath0.fullstack.api.user.User;
import io.github.shubrath0.fullstack.api.user.dto.request.CreateUserRequest;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public abstract UserDTO toDto(User user);

    @Mapping(target = "password", source = "password", qualifiedByName = "encodePassword")
    @Mapping(target = "id", ignore = true)
    public abstract User toEntity(CreateUserRequest request);

    @Named("encodePassword")
    protected String encodePassword(String password) {
        return passwordEncoder.encode(password);
    }
}
