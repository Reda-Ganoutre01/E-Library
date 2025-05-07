package dev.library.backend.controllers;

import dev.library.backend.dto.requests.UserRequestDto;
import dev.library.backend.dto.response.UserResponseDto;
import dev.library.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import dev.library.backend.services.UserService;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class UserController {
    public final UserService userService;
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(@RequestParam(defaultValue = "0") int page , @RequestParam(defaultValue = "10") int size , @RequestParam(defaultValue = "fullName") String sortBy, @RequestParam(defaultValue = "asc") String direction)
    {
        try
        {
            return new ResponseEntity<>(this.userService.getAllUsers(page , size , sortBy , direction) , HttpStatus.OK);
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
    @PreAuthorize("hasRole('LIBRARIAN')") 
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

    @DeleteMapping("/delete/{id}")
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
    @GetMapping("/profile/{name}")
    public ResponseEntity<?> getProfile(@PathVariable String name) {
        try {
            UserResponseDto userProfile = userService.getUserProfileByName(name);
            if (userProfile == null) {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(userProfile, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
