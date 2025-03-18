package dev.library.backend.repositories;

import dev.library.backend.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import dev.library.backend.entities.Message;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByUser(User user);
}