package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.entities.User;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserResponseDto toDataTransferObject(User user);
    List<UserResponseDto> toDataTransferObjects(List<User> userList);

    @Mapping(target = "password", ignore = true)
    User toEntity(UserRequestDto userRequestDto);

    @Mapping(target = "password", ignore = true)
    default User toEntity(UserRequestDto userRequestDto, @Context PasswordEncoder passwordEncoder) {
        User user = toEntity(userRequestDto);
        if (userRequestDto.getPassword() != null && !userRequestDto.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userRequestDto.getPassword()));
        }
        return user;
    }

    @Mapping(target = "password", ignore = true)
    void updateUser(@MappingTarget User user, UserRequestDto userRequestDto , @Context PasswordEncoder passwordEncoder);

    @AfterMapping
    default void encodePassword(@MappingTarget User user, UserRequestDto userRequestDto, @Context PasswordEncoder passwordEncoder) {
        if (userRequestDto.getPassword() != null && !userRequestDto.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(userRequestDto.getPassword()));
        }
    }
}
