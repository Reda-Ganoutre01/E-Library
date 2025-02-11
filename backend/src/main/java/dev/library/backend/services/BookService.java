package dev.library.backend.services;

import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.models.Book;
import dev.library.backend.repositories.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import dev.library.backend.repositories.BookRepository;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {
    private final BookMapperService bookResponseMapperService;
    private final FileUploadService fileUploadService;
    private final CategoryRepository categoryRepository;
    private final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository , BookMapperService bookResponseMapperService , FileUploadService fileUploadService , CategoryRepository categoryRepository) {
        this.bookResponseMapperService = bookResponseMapperService;
        this.fileUploadService         = fileUploadService;
        this.bookRepository            = bookRepository;
        this.categoryRepository        = categoryRepository;
    }
    public Page<BookResponseDto> getBooks(int page , int size , String sortBy , String direction)
    {
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Book> books = this.bookRepository.findAll(pageable);
        return books.map(this.bookResponseMapperService::toDataTransferObject);
    }
    public BookResponseDto getBook(Long id)
    {
        Book book = this.bookRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return this.bookResponseMapperService.toDataTransferObject(book);
    }
    public BookResponseDto createBook(BookRequestDto bookRequestDto) {
        Book book = new Book();
        book.setAuthor(bookRequestDto.getAuthor());
        book.setTitle(bookRequestDto.getTitle());
        book.setIsbn(bookRequestDto.getIsbn());
        book.setCopies(bookRequestDto.getCopies());
        book.setCover(null);
        book.setCategory(
                this.categoryRepository.findById(bookRequestDto.getCategoryId()).orElseThrow(EntityNotFoundException::new)
        );
        return this.bookResponseMapperService.toDataTransferObject(this.bookRepository.save(book));
    }
    public List<BookResponseDto> getBooksBySearch(String search) {
        return this.bookResponseMapperService.toDataTransferObjects(this.bookRepository.searchBooks(search));
    }


     // Find 3 new books
     public List<Book> getLatestBooks() {
        return this.bookRepository.findThreeLatestBooks();
    }
}
