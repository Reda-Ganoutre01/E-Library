package dev.library.backend.services;

import dev.library.backend.dto.mappers.BookMapper;
import dev.library.backend.dto.mappers.BookMapper;
import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;
import dev.library.backend.entities.Book;
import dev.library.backend.entities.Category;
import dev.library.backend.repositories.CategoryRepository;
import dev.library.backend.utils.FileUploaderResolver;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
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
@AllArgsConstructor
public class BookService
{
    private final FileUploaderResolver fileUploaderResolver;
    private final CategoryRepository   categoryRepository;
    private final BookRepository       bookRepository;
    private final BookMapper           bookMapper;

    public Page<BookResponseDto> getBooks(int page , int size , String sortBy , String direction)
    {
        Sort sort = direction.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        Page<Book> books = this.bookRepository.findAll(pageable);
        return books.map(this.bookMapper::toDataTransferObject);
    }

    public BookResponseDto getBook(Long id)
    {
        Book book = this.bookRepository.findById(id).orElseThrow(EntityNotFoundException::new);
        return this.bookMapper.toDataTransferObject(book);
    }

    public BookResponseDto createBook(BookRequestDto bookRequestDto , MultipartFile file) throws IOException
    {
        Book book = new Book();
        try
        {
            Category category = this.categoryRepository.findById(bookRequestDto.getCategoryId()).orElseThrow();
            String cover = this.fileUploaderResolver.uploadFile(file);
            book.setAuthor(bookRequestDto.getAuthor());
            book.setTitle(bookRequestDto.getTitle());
            book.setIsbn(bookRequestDto.getIsbn());
            book.setCopies(bookRequestDto.getCopies());
            book.setCover(cover);
            book.setCategory(category);
        }
        catch (Exception e)
        {
            System.out.println(e.getMessage());
            throw e;
        }

        return this.bookMapper.toDataTransferObject(this.bookRepository.save(book));
    }

    public BookResponseDto updateBook(Long bookId, BookRequestDto bookRequestDto, MultipartFile file) throws IOException {
    Book existingBook = this.bookRepository.findById(bookId)
            .orElseThrow(() -> new RuntimeException("Book not found with ID: " + bookId));

    try {
        Category category = this.categoryRepository.findById(bookRequestDto.getCategoryId())
                .orElseThrow(() -> new RuntimeException("Category not found with ID: " + bookRequestDto.getCategoryId()));

        if (file != null && !file.isEmpty()) {
            String newCover = this.fileUploaderResolver.uploadFile(file);
            existingBook.setCover(newCover);
        }

        existingBook.setAuthor(bookRequestDto.getAuthor());
        existingBook.setTitle(bookRequestDto.getTitle());
        existingBook.setIsbn(bookRequestDto.getIsbn());
        existingBook.setCopies(bookRequestDto.getCopies());
        existingBook.setCategory(category);

        Book updatedBook = this.bookRepository.save(existingBook);
        return this.bookMapper.toDataTransferObject(updatedBook);
    } catch (Exception e) {
        System.out.println(e.getMessage());
        throw e;
    }
}

    public List<BookResponseDto> getBooksBySearch(String search)
    {
        return this.bookMapper
                .toDataTransferObjects(this.bookRepository.searchBooks(search));
    }

    public List<BookResponseDto> getLatestBooks()
    {
        List<Book> latestBooks = this.bookRepository.findThreeLatestBooks();
        return this.bookMapper.toDataTransferObjects(latestBooks);
    }


    public List<BookResponseDto> getTopBooks()
    {
        List<Book> topBooks=this.bookRepository.getTopBooks();
        return this.bookMapper.toDataTransferObjects(topBooks);
    }

    public List<BookResponseDto> getBooksByCategories(String categories)
    {
        return this.bookMapper.toDataTransferObjects(this.bookRepository.getBooksByCategories(categories));
    }

    public Void deleteBook(Long id)
    {
        this.bookRepository.deleteById(id);
        return null;
    }
}
