package dev.library.backend.services;

import dev.library.backend.dto.mappers.BookMapper;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.repositories.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @Mock
    private BookMapper bookMapper;

    @InjectMocks
    private BookService bookService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

   

    @Test
    public void testGetBooksBySearch_SpecificTitle() {
        // Arrange
        String searchQuery = "JavaScript For Dummies 3rd Edition";
        Book book = new Book();
        book.setId(1L);
        book.setTitle("JavaScript For Dummies 3rd Edition");

        List<Book> books = Arrays.asList(book);
        List<BookResponseDto> responseDtos = Arrays.asList(new BookResponseDto());

        when(bookRepository.searchBooks(searchQuery)).thenReturn(books);
        when(bookMapper.toDataTransferObjects(books)).thenReturn(responseDtos);

        // Act
        List<BookResponseDto> result = bookService.getBooksBySearch(searchQuery);

        // Assert
        assertEquals(responseDtos, result);
        assertEquals(1, result.size());
    }
}
