package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookMapperService {
    public BookResponseDto toDataTransferObject(Book book)
    {
        BookResponseDto bookResponseDto = new BookResponseDto();
        bookResponseDto.setId(book.getId());
        bookResponseDto.setTitle(book.getTitle());
        bookResponseDto.setAuthor(book.getAuthor());
        bookResponseDto.setDescription(book.getDescription());
        bookResponseDto.setCover(book.getCover());
        bookResponseDto.setCopies(book.getCopies());

        if (book.getCategory() != null)
        {
            bookResponseDto.setCategory(book.getCategory().getName());
        }
        return bookResponseDto;
    }
    public List<BookResponseDto> toDataTransferObjects(List<Book> books)
    {
        return books.stream().map(this::toDataTransferObject).collect(Collectors.toList());
    }
}
