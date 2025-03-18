package dev.library.backend.dto.requests;

import dev.library.backend.entities.enums.Status;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class BorrowRecordRequestDto {
    private Long userId;
    private Long bookId;
    private Status status;
    private LocalDateTime borrowDate;
    private LocalDateTime returnDate;
}
