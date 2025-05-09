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






public class BorrowRecordServiceTest {

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
    public void setUp() {

        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testCreateBorrowRecord_Success() {
        // Arrange
        BorrowRecordRequestDto requestDto = new BorrowRecordRequestDto();
        requestDto.setUserId(1L);
        requestDto.setBookId(2L);
        requestDto.setReturnDate(LocalDateTime.now().plusDays(7));

        User user = new User();
        user.setId(1L);

        Book book = new Book();
        book.setId(2L);

        BorrowRecord borrowRecord = BorrowRecord.builder()
                .user(user)
                .book(book)
                .status(Status.BORROWED)
                .borrowDate(LocalDateTime.now())
                .returnDate(requestDto.getReturnDate())
                .build();

        BorrowRecordResponseDto responseDto = new BorrowRecordResponseDto();

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(bookRepository.findById(2L)).thenReturn(Optional.of(book));
        when(borrowRecordRepository.countByUserIdAndStatus(1L, Status.BORROWED)).thenReturn(2L);
        when(borrowRecordRepository.save(any(BorrowRecord.class))).thenReturn(borrowRecord);
        when(borrowRecordMapper.toDataTransferObject(borrowRecord)).thenReturn(responseDto);

        // Act
        BorrowRecordResponseDto result = borrowRecordService.createBorrowRecord(requestDto);

        // Assert
        assertNotNull(result);
        verify(borrowRecordRepository, times(1)).save(any(BorrowRecord.class));
    }

    @Test
    public void testCreateBorrowRecord_UserReachedLimit() {
        // Arrange
        BorrowRecordRequestDto requestDto = new BorrowRecordRequestDto();
        requestDto.setUserId(1L);

        when(borrowRecordRepository.countByUserIdAndStatus(1L, Status.BORROWED)).thenReturn(3L);

        // Act & Assert
        IllegalStateException exception = assertThrows(IllegalStateException.class, () -> {
            borrowRecordService.createBorrowRecord(requestDto);
        });
        assertEquals("Can't create borrow record because user has reached the maximum number of books (3)", exception.getMessage());
        verify(borrowRecordRepository, never()).save(any(BorrowRecord.class));
    }

    @Test
    public void testCreateBorrowRecord_UserNotFound() {
        // Arrange
        BorrowRecordRequestDto requestDto = new BorrowRecordRequestDto();
        requestDto.setUserId(1L);

        when(userRepository.findById(1L)).thenReturn(Optional.empty());

        // Act & Assert
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            borrowRecordService.createBorrowRecord(requestDto);
        });
        assertEquals("User not found", exception.getMessage());
        verify(borrowRecordRepository, never()).save(any(BorrowRecord.class));
    }

    @Test
    public void testCreateBorrowRecord_BookNotFound() {
        // Arrange
        BorrowRecordRequestDto requestDto = new BorrowRecordRequestDto();
        requestDto.setUserId(1L);
        requestDto.setBookId(2L);

        User user = new User();
        user.setId(1L);

        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        when(bookRepository.findById(2L)).thenReturn(Optional.empty());

        // Act & Assert
        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> {
            borrowRecordService.createBorrowRecord(requestDto);
        });
        assertEquals("Book not found", exception.getMessage());
        verify(borrowRecordRepository, never()).save(any(BorrowRecord.class));
    }
}