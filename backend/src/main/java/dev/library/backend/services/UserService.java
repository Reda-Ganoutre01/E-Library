package dev.library.backend.services;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import dev.library.backend.dto.mappers.UserMapper;
import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import dev.library.backend.entities.User;
import dev.library.backend.entities.enums.Role;
import dev.library.backend.repositories.UserRepository;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService
{

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public Page<UserResponseDto> getAllUsers(int page , int size , String sortBy , String sortOrder)
    {
        Sort sort = sortOrder.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<User> collection = userRepository.findAll(pageable);
        return collection.map(this.userMapper::toDataTransferObject);
    }

    public UserResponseDto getUser(Long id)
    {
        return this.userRepository.existsById(id) ? this.userMapper.toDataTransferObject(this.userRepository.findById(id).orElseThrow()) : null;
    }

    public UserResponseDto createUser(UserRequestDto userRequestDto)
    {
        User user = this.userMapper.toEntity(userRequestDto, this.passwordEncoder);
        return this.userMapper.toDataTransferObject(this.userRepository.save(user));
    }

    public UserResponseDto updateUser(UserRequestDto userRequestDto , Long id)
    {
        User user = this.userRepository.findById(id).orElseThrow();
        this.userMapper.updateUser(user , userRequestDto , this.passwordEncoder);
        return this.userMapper.toDataTransferObject(this.userRepository.save(user));
    }

    public void deleteUser(Long id)
    {
        this.userRepository.deleteById(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = this.userRepository.findByUsername(username);
        return new org.springframework.security.core.userdetails
                .User(user.getUsername(),user.getPassword(),this.mapRolesToAuthorities(user.getRole()));
    }

    private Collection<GrantedAuthority> mapRolesToAuthorities(Role role)
    {
        return Collections.singletonList(new SimpleGrantedAuthority(role.name()));
    }
}
