package dev.library.backend.services;

import dev.library.backend.dto.mappers.BorrowRecordMapper;
import dev.library.backend.dto.requests.BorrowRecordRequestDto;
import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.entities.BorrowRecord;
import dev.library.backend.entities.User;
import dev.library.backend.entities.enums.Status;
import dev.library.backend.repositories.BookRepository;
import dev.library.backend.repositories.BorrowRecordRepository;
import dev.library.backend.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.time.LocalDateTime;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class BorrowRecordServiceTest {

    @Mock
    private BorrowRecordRepository borrowRecordRepository;

    @Mock
    private BorrowRecordMapper borrowRecordMapper;

    @Mock
    private UserRepository userRepository;

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BorrowRecordService borrowRecordService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void createBorrowRecord_SuccessForUserReda() {
        // Arrange
        BorrowRecordRequestDto requestDto = new BorrowRecordRequestDto();
        requestDto.setUserId(1L);
        requestDto.setBookId(1L);
        requestDto.setReturnDate(LocalDateTime.now().plusDays(7));

        User user = new User();
        user.setId(1L);
        user.setUsername("Reda");

        Book book = new Book();
        book.setId(1L);
        book.setTitle("JavaScript For Dummies 3rd Edition"); // Set the book title

        BorrowRecord borrowRecord = BorrowRecord.builder()
                .user(user)
                .book(book)
                .status(Status.BORROWED)
                .borrowDate(LocalDateTime.now())
                .returnDate(requestDto.getReturnDate())
                .build();

        BorrowRecordResponseDto responseDto = new BorrowRecordResponseDto();

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));
        when(borrowRecordRepository.countByUserIdAndStatus(1L, Status.BORROWED)).thenReturn(2L);
        when(borrowRecordRepository.save(any(BorrowRecord.class))).thenReturn(borrowRecord);
        when(borrowRecordMapper.toDataTransferObject(borrowRecord)).thenReturn(responseDto);

        // Act
        BorrowRecordResponseDto result = borrowRecordService.createBorrowRecord(requestDto);

        // Assert
        assertNotNull(result);
        verify(borrowRecordRepository, times(1)).save(any(BorrowRecord.class));
        assertEquals("Reda", borrowRecord.getUser().getUsername()); // Verify the user's name
        assertEquals("JavaScript For Dummies 3rd Edition", borrowRecord.getBook().getTitle()); // Verify the book title
    }
}
