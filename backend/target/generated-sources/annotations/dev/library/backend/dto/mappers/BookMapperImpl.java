package dev.library.backend.dto.mappers;

import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.entities.Category;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-19T22:21:11+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.2 (Oracle Corporation)"
)
@Component
public class BookMapperImpl implements BookMapper {

    @Override
    public Book toEntity(BookRequestDto bookRequestDto) {
        if ( bookRequestDto == null ) {
            return null;
        }

        Book.BookBuilder book = Book.builder();

        book.cover( bookRequestDto.getCover() );
        book.title( bookRequestDto.getTitle() );
        book.author( bookRequestDto.getAuthor() );
        book.description( bookRequestDto.getDescription() );
        book.isbn( bookRequestDto.getIsbn() );
        book.copies( bookRequestDto.getCopies() );

        return book.build();
    }

    @Override
    public BookResponseDto toDataTransferObject(Book book) {
        if ( book == null ) {
            return null;
        }

        BookResponseDto.BookResponseDtoBuilder bookResponseDto = BookResponseDto.builder();

        bookResponseDto.category( bookCategoryName( book ) );
        bookResponseDto.id( book.getId() );
        bookResponseDto.title( book.getTitle() );
        bookResponseDto.cover( book.getCover() );
        bookResponseDto.author( book.getAuthor() );
        bookResponseDto.description( book.getDescription() );
        bookResponseDto.isbn( book.getIsbn() );
        bookResponseDto.copies( book.getCopies() );

        return bookResponseDto.build();
    }

    @Override
    public List<BookResponseDto> toDataTransferObjects(List<Book> book) {
        if ( book == null ) {
            return null;
        }

        List<BookResponseDto> list = new ArrayList<BookResponseDto>( book.size() );
        for ( Book book1 : book ) {
            list.add( toDataTransferObject( book1 ) );
        }

        return list;
    }

    private String bookCategoryName(Book book) {
        if ( book == null ) {
            return null;
        }
        Category category = book.getCategory();
        if ( category == null ) {
            return null;
        }
        String name = category.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }
}
