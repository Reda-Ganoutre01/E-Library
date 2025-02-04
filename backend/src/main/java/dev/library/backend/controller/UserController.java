package dev.library.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.User;
import dev.library.backend.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/users")
public class UserController {
    public final UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/{username}")
    public User showUser(@PathVariable String username) {
        return this.userService.getUser("sikrox.memer");
    }
    
}
