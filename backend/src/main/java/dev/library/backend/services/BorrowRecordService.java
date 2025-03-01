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
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class BorrowRecordService
{

    private final BorrowRecordRepository borrowRecordRepository;
    private final BorrowRecordMapper borrowRecordMapper;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    public Page<BorrowRecordResponseDto> getBorrowRecords(int page , int size , String sortBy , String sortOrder)
    {
        Sort sort = sortOrder.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<BorrowRecord> collection = this.borrowRecordRepository.findAll(pageable);
        return collection.map(this.borrowRecordMapper::toDataTransferObject);
    }

    public BorrowRecordResponseDto getBorrowRecord(Long id)
    {
        return this.borrowRecordMapper.toDataTransferObject(this.borrowRecordRepository.findById(id).orElseThrow());
    }

    public BorrowRecordResponseDto updateBorrowRecord(Long id, BorrowRecordRequestDto borrowRecordRequestDto)
    {
        BorrowRecord borrowRecord = this.borrowRecordRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("BorrowRecord not found"));
        User user = this.userRepository.findById(borrowRecordRequestDto.getUserId()).orElseThrow(() -> new IllegalArgumentException("User not found"));
        Book book = this.bookRepository.findById(borrowRecordRequestDto.getBookId()).orElseThrow(() -> new IllegalArgumentException("Book not found"));
        borrowRecord.setUser(user);
        borrowRecord.setBook(book);
        this.borrowRecordMapper.update(borrowRecord, borrowRecordRequestDto);
        BorrowRecord updatedBorrowRecord = this.borrowRecordRepository.save(borrowRecord);
        return this.borrowRecordMapper.toDataTransferObject(updatedBorrowRecord);
    }

    public void deleteBorrowRecord(Long id)
    {
        this.borrowRecordRepository.deleteById(id);
    }

    public boolean canUserBorrow(Long id)
    {
        long count = this.borrowRecordRepository.countByUserIdAndStatus(id , Status.BORROWED);
        return count < 3;
    }

    public BorrowRecordResponseDto createBorrowRecord(BorrowRecordRequestDto borrowRecordRequestDto)
    {
        Long userId = borrowRecordRequestDto.getUserId();
        Long bookId = borrowRecordRequestDto.getBookId();

        if (!this.canUserBorrow(userId))
        {
            throw new IllegalStateException("Can't create borrow record because user has reached the maximum number of books (3)");
        }

        User user = this.userRepository.findById(userId).orElseThrow();
        Book book = this.bookRepository.findById(bookId).orElseThrow();

        BorrowRecord borrowRecord = BorrowRecord.builder()
                .book(book)
                .user(user)
                .status(Status.BORROWED)
                .borrowDate(LocalDateTime.now())
                .returnDate(borrowRecordRequestDto.getReturnDate())
                .build();

        return this.borrowRecordMapper.toDataTransferObject(this.borrowRecordRepository.save(borrowRecord));
    }

    public  List<BorrowRecordResponseDto> getUserBorrowRecords(Long userid){
        List<BorrowRecord> borrowRecords=this.borrowRecordRepository.getUserBrrowRecord(userid);
        return borrowRecords.stream()
                .map(this.borrowRecordMapper::toDataTransferObject)
                .toList();

    }
}
