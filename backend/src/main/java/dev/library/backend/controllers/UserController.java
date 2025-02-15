package dev.library.backend.controllers;

import java.util.List;

import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.User;
import dev.library.backend.services.UserService;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    public final UserService userService;
    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers()
    {
        try
        {
            return new ResponseEntity<>(this.userService.getAllUsers() , HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(this.userService.getUser(id), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody UserRequestDto user)
    {
        try
        {
            return new ResponseEntity<>(this.userService.createUser(user), HttpStatus.CREATED);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage() , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id , @RequestBody UserRequestDto user)
    {
        try
        {
            return new ResponseEntity<>(this.userService.updateUser(user , id), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage() , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id)
    {
        try
        {
            this.userService.deleteUser(id);
            return new ResponseEntity<>(null  , HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage() , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
