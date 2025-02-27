package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.BorrowRecordRequestDto;
import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.entities.BorrowRecord;
import dev.library.backend.entities.User;
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
    date = "2025-02-26T21:04:42+0000",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.2 (Oracle Corporation)"
)
@Component
public class BorrowRecordMapperImpl implements BorrowRecordMapper {

    @Override
    public BorrowRecord toEntity(BorrowRecordResponseDto responseDto) {
        if ( responseDto == null ) {
            return null;
        }

        BorrowRecord.BorrowRecordBuilder borrowRecord = BorrowRecord.builder();

        borrowRecord.user( borrowRecordResponseDtoToUser( responseDto ) );
        borrowRecord.book( borrowRecordResponseDtoToBook( responseDto ) );
        borrowRecord.id( responseDto.getId() );
        if ( responseDto.getBorrowDate() != null ) {
            borrowRecord.borrowDate( LocalDateTime.ofInstant( responseDto.getBorrowDate().toInstant(), ZoneId.of( "UTC" ) ) );
        }
        if ( responseDto.getReturnDate() != null ) {
            borrowRecord.returnDate( LocalDateTime.ofInstant( responseDto.getReturnDate().toInstant(), ZoneId.of( "UTC" ) ) );
        }
        borrowRecord.status( responseDto.getStatus() );

        return borrowRecord.build();
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

    @Override
    public void update(BorrowRecord entity, BorrowRecordRequestDto borrowRecordResponseDto) {
        if ( borrowRecordResponseDto == null ) {
            return;
        }

        if ( entity.getUser() == null ) {
            entity.setUser( User.builder().build() );
        }
        borrowRecordRequestDtoToUser( borrowRecordResponseDto, entity.getUser() );
        entity.setReturnDate( borrowRecordResponseDto.getReturnDate() );
        entity.setStatus( borrowRecordResponseDto.getStatus() );
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

        Book.BookBuilder book = Book.builder();

        book.id( borrowRecordResponseDto.getBookId() );

        return book.build();
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

    protected void borrowRecordRequestDtoToUser(BorrowRecordRequestDto borrowRecordRequestDto, User mappingTarget) {
        if ( borrowRecordRequestDto == null ) {
            return;
        }

        mappingTarget.setId( borrowRecordRequestDto.getUserId() );
    }
}
