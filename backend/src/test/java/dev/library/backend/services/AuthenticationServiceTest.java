package dev.library.backend.services;

import dev.library.backend.dto.requests.RegisterRequestDto;
import dev.library.backend.dto.response.AuthenticationResponseDto;
import dev.library.backend.entities.User;
import dev.library.backend.entities.enums.Role;
import dev.library.backend.repositories.UserRepository;
import dev.library.backend.security.JwtService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AuthenticationServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private JwtService jwtService;

    @InjectMocks
    private AuthenticationService authenticationService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testRegister() {
        // Arrange
        RegisterRequestDto registerRequestDto = new RegisterRequestDto();
        registerRequestDto.setUsername("testuser");
        registerRequestDto.setEmail("testuser@example.com");
        registerRequestDto.setFullName("Test User");
        registerRequestDto.setPassword("password");

        User mockUser = User.builder()
                .role(Role.USER)
                .username("testuser")
                .email("testuser@example.com")
                .fullName("Test User")
                .password("encodedPassword")
                .build();

        String mockJwtToken = "mockJwtToken";

        when(passwordEncoder.encode(registerRequestDto.getPassword())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(mockUser);
        when(jwtService.generateToken(any(User.class))).thenReturn(mockJwtToken);

        // Act
        AuthenticationResponseDto response = authenticationService.register(registerRequestDto);

        // Assert
        assertEquals(mockJwtToken, response.getToken());
        verify(passwordEncoder, times(1)).encode(registerRequestDto.getPassword());
        verify(userRepository, times(1)).save(any(User.class));
        verify(jwtService, times(1)).generateToken(any(User.class));
    }
}
