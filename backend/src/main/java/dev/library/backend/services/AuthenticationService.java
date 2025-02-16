package dev.library.backend.services;

import dev.library.backend.security.JwtService;
import dev.library.backend.dto.requests.AuthenticationRequestDto;
import dev.library.backend.dto.requests.RegisterRequestDto;
import dev.library.backend.dto.response.AuthenticationResponseDto;
import dev.library.backend.entities.User;
import dev.library.backend.entities.enums.Role;
import dev.library.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    @Autowired
    public AuthenticationService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, JwtService jwtService)
    {
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    public AuthenticationResponseDto register(RegisterRequestDto registerRequestDto)
    {

        User user = User.builder()
                .role(Role.USER)
                .username(registerRequestDto.getUsername())
                .email(registerRequestDto.getEmail())
                .fullName(registerRequestDto.getFullName())
                .password(this.passwordEncoder.encode(registerRequestDto.getPassword()))
                .build();

        this.userRepository.save(user);

        String jwtToken = this.jwtService.generateToken(user);
        return AuthenticationResponseDto.builder().token(jwtToken).build();
    }
    public AuthenticationResponseDto authenticate(AuthenticationRequestDto request)
    {
        this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername() , request.getPassword())
        );
        User user = this.userRepository.findByUsername(request.getUsername());
        return AuthenticationResponseDto.builder().token(this.jwtService.generateToken(user)).build();
    }
}
