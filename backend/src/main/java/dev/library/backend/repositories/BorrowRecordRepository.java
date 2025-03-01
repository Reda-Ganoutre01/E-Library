package dev.library.backend.repositories;

import dev.library.backend.controllers.BorrowRecordController;
import dev.library.backend.entities.BorrowRecord;
import dev.library.backend.entities.enums.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BorrowRecordRepository extends JpaRepository<BorrowRecord, Long>
{
    Long countByUserIdAndStatus(Long userId, Status status);

    @Query(value = "SELECT bor.* FROM borrow_records bor " +
            "JOIN books book ON book.id = bor.book_id " +
            "WHERE bor.user_id = :userId",
            nativeQuery = true)
    List<BorrowRecord> getUserBrrowRecord(@Param("userId") Long userId);



}
