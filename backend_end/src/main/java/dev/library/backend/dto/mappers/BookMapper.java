package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BookMapper
{
    BookMapper INSTANCE = Mappers.getMapper(BookMapper.class);
    Book toEntity(BookRequestDto bookRequestDto);

    @Mapping(source = "category.name" , target = "category")
    BookResponseDto toDataTransferObject(Book book);

    List<BookResponseDto> toDataTransferObjects(List<Book> book);
}
