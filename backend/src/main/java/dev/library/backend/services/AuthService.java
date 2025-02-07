package dev.library.backend.services;

import java.nio.file.attribute.UserPrincipal;

import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.requests.LoginRequest;
import dev.library.backend.requests.RegisterRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    @Autowired
    public AuthService(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
    }
    public boolean login(LoginRequest loginRequest , HttpServletRequest httpServletRequest) {
        Authentication authentication = this.authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        httpServletRequest.getSession().setAttribute("user", userDetails.getUsername());
        return true;
    }
    public boolean register(RegisterRequest registerRequest) {
        User user = new User();
        if (this.userService.findUser(registerRequest.getUsername()) != null) {
            return false;
        }
        user.setUsername(registerRequest.getUsername());
        user.setFullName(registerRequest.getFullName());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(this.passwordEncoder.encode(registerRequest.getPassword()));
        user.setRole(Role.USER);
        this.userService.create(user);
        return true;
    }
}
