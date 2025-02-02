package dev.library.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import dev.library.backend.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {}