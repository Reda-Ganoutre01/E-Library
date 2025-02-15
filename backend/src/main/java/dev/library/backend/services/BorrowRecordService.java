package dev.library.backend.services;

import dev.library.backend.dto.mappers.BorrowRecordMapper;
import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.repositories.BorrowRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowRecordService {
    @Autowired
    private BorrowRecordMapper borrowRecordMapper;

    @Autowired
    private BorrowRecordRepository borrowRecordRepository;

    public List<BorrowRecordResponseDto> getBorrowRecords()
    {
        return this.borrowRecordMapper.toDataTransferObjects(this.borrowRecordRepository.findAll());
    }
}
