package dev.library.backend.controllers;

import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.services.BorrowRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/borrowRecords")
public class BorrowRecordController {
    private final BorrowRecordService borrowRecordService;
    @Autowired
    public BorrowRecordController(BorrowRecordService borrowRecordService)
    {
        this.borrowRecordService = borrowRecordService;
    }
    @GetMapping("/")
    public ResponseEntity<List<BorrowRecordResponseDto>> getBorrowRecords()
    {
        try
        {
            return new ResponseEntity<>(this.borrowRecordService.getBorrowRecords(), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
