package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.entities.User;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-23T03:26:25+0000",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.1 (Oracle Corporation)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public UserResponseDto toDataTransferObject(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponseDto.UserResponseDtoBuilder userResponseDto = UserResponseDto.builder();

        userResponseDto.id( user.getId() );
        userResponseDto.username( user.getUsername() );
        userResponseDto.email( user.getEmail() );
        userResponseDto.fullName( user.getFullName() );
        userResponseDto.role( user.getRole() );

        return userResponseDto.build();
    }

    @Override
    public List<UserResponseDto> toDataTransferObjects(List<User> userList) {
        if ( userList == null ) {
            return null;
        }

        List<UserResponseDto> list = new ArrayList<UserResponseDto>( userList.size() );
        for ( User user : userList ) {
            list.add( toDataTransferObject( user ) );
        }

        return list;
    }

    @Override
    public User toEntity(UserRequestDto userRequestDto) {
        if ( userRequestDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.username( userRequestDto.getUsername() );
        user.email( userRequestDto.getEmail() );
        user.fullName( userRequestDto.getFullName() );
        user.role( userRequestDto.getRole() );

        return user.build();
    }

    @Override
    public void updateUser(User user, UserRequestDto userRequestDto, PasswordEncoder passwordEncoder) {
        if ( userRequestDto == null ) {
            return;
        }

        user.setUsername( userRequestDto.getUsername() );
        user.setEmail( userRequestDto.getEmail() );
        user.setFullName( userRequestDto.getFullName() );
        user.setRole( userRequestDto.getRole() );

        encodePassword( user, userRequestDto, passwordEncoder );
    }
}
