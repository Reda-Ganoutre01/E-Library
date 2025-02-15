package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.models.BorrowRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BorrowRecordMapper {

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "bookId", target = "book.id")
    BorrowRecord toEntity(BorrowRecordResponseDto responseDto);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "book.id", target = "bookId")
    BorrowRecordResponseDto toDataTransferObject(BorrowRecord entity);

    List<BorrowRecordResponseDto> toDataTransferObjects(List<BorrowRecord> borrowRecords);
}
