package dev.library.backend.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.library.backend.repository.BookRepository;
import jakarta.persistence.EntityNotFoundException;
import dev.library.backend.models.Book;



@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Set<Book> getBooks() {
        return bookRepository.findAll();
    }


    public Book getBook(Long id) {
        return bookRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Book not found with ID: " + id));
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }
    
    public Book updateBook(Book book) {
        if (!bookRepository.existsById(book.getId())) {
            throw new EntityNotFoundException("Book not found with ID: " + book.getId());
        }
        return bookRepository.save(book);
    }

    public void deleteBook(Long id) {
        if (!bookRepository.existsById(id)) {
            throw new RuntimeException("Cannot delete: Book not found with ID: " + id);
        }
        bookRepository.deleteById(id);
    }
}
