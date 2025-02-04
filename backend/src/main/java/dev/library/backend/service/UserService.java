package dev.library.backend.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import dev.library.backend.models.User;
import dev.library.backend.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(User user) {
        if (!userRepository.existsById(user.getId())) {
            throw new EntityNotFoundException("User not found with id: " + user.getId());
        }
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        if (!userRepository.existsById(id)) {
            throw new EntityNotFoundException("User not found with id: " + id);
        }
        userRepository.deleteById(id);
    }
    // @Override
    // public UserDetails loadUserByUsernameDetails(String username) throws
    // UsernameNotFoundException {
    // User user = userRepository.findByUsername(username);
    // return new
    // org.springframework.security.core.userdetails.User(user.getUsername(),user.getPassword(),new
    // ArrayList<>());
    // }

}
