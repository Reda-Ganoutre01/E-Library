package dev.library.backend.controllers;

import dev.library.backend.dto.requests.BorrowRecordRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.services.BorrowRecordService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/borrowRecords")
public class BorrowRecordController {
    private final BorrowRecordService borrowRecordService;

    @Autowired
    public BorrowRecordController(BorrowRecordService borrowRecordService) {
        this.borrowRecordService = borrowRecordService;
    }

    @GetMapping("/")
    public ResponseEntity<?> getBorrowRecords(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "status") String sortBy, @RequestParam(defaultValue = "asc") String direction) {
        try {
            return new ResponseEntity<>(this.borrowRecordService.getBorrowRecords(page, size, sortBy, direction), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBorrowRecord(@PathVariable Long id) {
        try {
            return new ResponseEntity<>(this.borrowRecordService.getBorrowRecord(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateBorrowRecord(@PathVariable Long id, @RequestBody BorrowRecordRequestDto borrowRecordRequestDto) {
        try {
            return new ResponseEntity<>(this.borrowRecordService.updateBorrowRecord(id, borrowRecordRequestDto), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<?> createBorrowRecord(@RequestBody BorrowRecordRequestDto borrowRecordRequestDto) {
        try {
            return new ResponseEntity<>(this.borrowRecordService.createBorrowRecord(borrowRecordRequestDto), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBorrowRecord(@PathVariable Long id) {
        try {
            this.borrowRecordService.deleteBorrowRecord(id);
            return new ResponseEntity<>(null, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserBorrowRecords(@PathVariable Long id) {
        try {
            List<BookResponseDto> books = this.borrowRecordService.getBooksByUserId(id);
            return new ResponseEntity<>(books, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
