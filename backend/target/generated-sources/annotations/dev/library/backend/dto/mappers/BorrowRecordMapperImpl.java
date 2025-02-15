package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.models.BorrowRecord;
import dev.library.backend.models.User;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-15T01:17:16+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.12 (Amazon.com Inc.)"
)
@Component
public class BorrowRecordMapperImpl implements BorrowRecordMapper {

    @Override
    public BorrowRecord toEntity(BorrowRecordResponseDto responseDto) {
        if ( responseDto == null ) {
            return null;
        }

        BorrowRecord borrowRecord = new BorrowRecord();

        borrowRecord.setUser( borrowRecordResponseDtoToUser( responseDto ) );
        borrowRecord.setBook( borrowRecordResponseDtoToBook( responseDto ) );
        borrowRecord.setId( responseDto.getId() );
        if ( responseDto.getBorrowDate() != null ) {
            borrowRecord.setBorrowDate( LocalDateTime.ofInstant( responseDto.getBorrowDate().toInstant(), ZoneId.of( "UTC" ) ) );
        }
        if ( responseDto.getReturnDate() != null ) {
            borrowRecord.setReturnDate( LocalDateTime.ofInstant( responseDto.getReturnDate().toInstant(), ZoneId.of( "UTC" ) ) );
        }
        borrowRecord.setStatus( responseDto.getStatus() );

        return borrowRecord;
    }

    @Override
    public BorrowRecordResponseDto toDataTransferObject(BorrowRecord entity) {
        if ( entity == null ) {
            return null;
        }

        BorrowRecordResponseDto borrowRecordResponseDto = new BorrowRecordResponseDto();

        borrowRecordResponseDto.setUserId( entityUserId( entity ) );
        borrowRecordResponseDto.setBookId( entityBookId( entity ) );
        if ( entity.getId() != null ) {
            borrowRecordResponseDto.setId( entity.getId() );
        }
        if ( entity.getBorrowDate() != null ) {
            borrowRecordResponseDto.setBorrowDate( Date.from( entity.getBorrowDate().toInstant( ZoneOffset.UTC ) ) );
        }
        if ( entity.getReturnDate() != null ) {
            borrowRecordResponseDto.setReturnDate( Date.from( entity.getReturnDate().toInstant( ZoneOffset.UTC ) ) );
        }
        borrowRecordResponseDto.setStatus( entity.getStatus() );

        return borrowRecordResponseDto;
    }

    @Override
    public List<BorrowRecordResponseDto> toDataTransferObjects(List<BorrowRecord> borrowRecords) {
        if ( borrowRecords == null ) {
            return null;
        }

        List<BorrowRecordResponseDto> list = new ArrayList<BorrowRecordResponseDto>( borrowRecords.size() );
        for ( BorrowRecord borrowRecord : borrowRecords ) {
            list.add( toDataTransferObject( borrowRecord ) );
        }

        return list;
    }

    protected User borrowRecordResponseDtoToUser(BorrowRecordResponseDto borrowRecordResponseDto) {
        if ( borrowRecordResponseDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( borrowRecordResponseDto.getUserId() );

        return user.build();
    }

    protected Book borrowRecordResponseDtoToBook(BorrowRecordResponseDto borrowRecordResponseDto) {
        if ( borrowRecordResponseDto == null ) {
            return null;
        }

        Book book = new Book();

        book.setId( borrowRecordResponseDto.getBookId() );

        return book;
    }

    private Long entityUserId(BorrowRecord borrowRecord) {
        if ( borrowRecord == null ) {
            return null;
        }
        User user = borrowRecord.getUser();
        if ( user == null ) {
            return null;
        }
        Long id = user.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    private Long entityBookId(BorrowRecord borrowRecord) {
        if ( borrowRecord == null ) {
            return null;
        }
        Book book = borrowRecord.getBook();
        if ( book == null ) {
            return null;
        }
        Long id = book.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }
}
