package dev.library.backend.controllers;

import dev.library.backend.services.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.User;
import dev.library.backend.models.enums.Role;
import dev.library.backend.requests.LoginRequest;
import dev.library.backend.requests.RegisterRequest;
import dev.library.backend.services.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;
    @Autowired
    public AuthController(AuthService authService) {
       this.authService = authService;
    }
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest registerRequest) {
        boolean result = this.authService.register(registerRequest);
        if (!result) {
            return new ResponseEntity<>("Registration error", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("Registration successful", HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest , HttpServletRequest httpServletRequest) {
        boolean result = this.authService.login(loginRequest , httpServletRequest);
        if (!result) {
            return new ResponseEntity<>("Login error", HttpStatus.BAD_REQUEST);
        }
        HttpSession session = httpServletRequest.getSession(false);

        if (session != null) {
            String sessionId = session.getId();
            return ResponseEntity.ok().header("JSESSIONID", sessionId).body("Login successful");
        }

        return new ResponseEntity<>("Login successful", HttpStatus.OK);
    }
}
