package dev.library.backend.services;

import dev.library.backend.dto.mappers.BookMapperService;
import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.entities.Category;
import dev.library.backend.repositories.CategoryRepository;
import dev.library.backend.utils.FileUploader;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import dev.library.backend.repositories.BookRepository;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class BookService
{
    private final BookMapperService bookResponseMapperService;
    private final FileUploader fileUploader;
    private final CategoryRepository categoryRepository;
    private final BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository , BookMapperService bookResponseMapperService , FileUploader fileUploader, CategoryRepository categoryRepository) {
        this.bookResponseMapperService = bookResponseMapperService;
        this.fileUploader = fileUploader;
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
    public BookResponseDto createBook(BookRequestDto bookRequestDto , MultipartFile file) throws IOException {
        try {
            Book book = new Book();
            Category category = this.categoryRepository.findById(bookRequestDto.getCategoryId()).orElseThrow(EntityNotFoundException::new);
            System.out.println(category);
            String cover = this.fileUploader.uploadFile(file);
            book.setAuthor(bookRequestDto.getAuthor());
            book.setTitle(bookRequestDto.getTitle());
            book.setIsbn(bookRequestDto.getIsbn());
            book.setCopies(bookRequestDto.getCopies());
            book.setCover(cover);
            book.setCategory(category);
            return this.bookResponseMapperService.toDataTransferObject(this.bookRepository.save(book));
        } catch (Exception e) {
            System.out.println("Exception : " + e.getMessage());
            System.out.println("Caused By : " + e.getCause());
            System.out.println(bookRequestDto);
            return null;
        }
    }
    public List<BookResponseDto> getBooksBySearch(String search) {
        return this.bookResponseMapperService
                .toDataTransferObjects(this.bookRepository.searchBooks(search));
    }
     // GET THREE lATEST BOOKS
     public List<BookResponseDto> getLatestBooks() {
        List<Book> latestBooks = this.bookRepository.findThreeLatestBooks();
        return this.bookResponseMapperService.toDataTransferObjects(latestBooks);
    }

    // GET TOP BOOKS
    public List<BookResponseDto> getTopBooks(){
        List<Book> topBooks=this.bookRepository.getTopBooks();
        return this.bookResponseMapperService.toDataTransferObjects(topBooks);
    }

    // Get  Books By Categories
    public List<BookResponseDto> getBooksByCategories(String categorie){
        return this.bookResponseMapperService.toDataTransferObjects(
                this.bookRepository.getBooksByCategories(categorie));

    }
}
