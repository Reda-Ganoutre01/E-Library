package dev.library.backend.dto.response;

import dev.library.backend.models.enums.Status;
import lombok.Data;

import java.util.Date;

@Data
public class BorrowRecordResponseDto {
    private long id;
    private Date borrowDate;
    private Date returnDate;
    private Status status;
    private Long userId;
    private Long bookId;
}
