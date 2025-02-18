package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.BorrowRecordRequestDto;
import dev.library.backend.dto.response.BorrowRecordResponseDto;
import dev.library.backend.entities.BorrowRecord;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BorrowRecordMapper {

    BorrowRecordMapper INSTANCE = Mappers.getMapper(BorrowRecordMapper.class);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(source = "bookId", target = "book.id")
    BorrowRecord toEntity(BorrowRecordResponseDto responseDto);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "book.id", target = "bookId")
    BorrowRecordResponseDto toDataTransferObject(BorrowRecord entity);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "book.id", target = "bookId")
    List<BorrowRecordResponseDto> toDataTransferObjects(List<BorrowRecord> borrowRecords);

    @Mapping(source = "userId", target = "user.id")
    @Mapping(target = "book", ignore = true)
    @Mapping(target = "id", ignore = true)
    void update(@MappingTarget BorrowRecord entity, BorrowRecordRequestDto borrowRecordResponseDto);
}