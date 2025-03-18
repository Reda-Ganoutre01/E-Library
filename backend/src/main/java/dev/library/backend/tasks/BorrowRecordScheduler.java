package dev.library.backend.tasks;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import dev.library.backend.entities.BorrowRecord;
import dev.library.backend.entities.enums.Status;
import dev.library.backend.repositories.BorrowRecordRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BorrowRecordScheduler {
    private final BorrowRecordRepository borrowRecordRepository;

    @Scheduled(cron = "0 0 0 * * ?")
    public void checkOverdueBorrowRecords() {
        LocalDateTime now = LocalDateTime.now();
        List<BorrowRecord> overdueRecords = borrowRecordRepository.findByReturnDateBeforeAndStatusNotAndStatusNot(now,
                Status.RETURNED, Status.OVERDUE);
        overdueRecords.forEach(record -> {
            record.setStatus(Status.OVERDUE);
            borrowRecordRepository.save(record);
        });
        System.out.println("Updated " + overdueRecords.size() + " records to OVERDUE status.");
    }
}