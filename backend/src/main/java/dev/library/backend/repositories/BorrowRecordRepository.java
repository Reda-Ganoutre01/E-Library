package dev.library.backend.repositories;

import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.BorrowRecord;
import dev.library.backend.entities.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface BorrowRecordRepository extends JpaRepository<BorrowRecord, Long>
{
    Long countByUserIdAndStatus(Long userId, Status status);
    List<BorrowRecord> getBorrowRecordsByUserId(Long userId);
    List<BorrowRecord> findByReturnDateBeforeAndStatusNotAndStatusNot(LocalDateTime returnDate, Status oldStatus, Status newStatus);
    List<BookResponseDto> getBooksByUserId(Long userId);
    List<BorrowRecord> findByUserId(Long userId);
}
