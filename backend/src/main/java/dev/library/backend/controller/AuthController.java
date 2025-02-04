package dev.library.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
public class AuthController {
    @PostMapping("/logout")
    public String logout() {
        return "Logout successful";
    }
    @PostMapping("/logout")
    public String register() {
        return "Logout successful";
    }
    @PostMapping("/logout")
    public String login() {
        return "Logout successful";
    }
}
