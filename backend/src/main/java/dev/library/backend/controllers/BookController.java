package dev.library.backend.controllers;

import dev.library.backend.dto.mappers.BookMapper;
import dev.library.backend.dto.requests.BookRequestDto;
import dev.library.backend.dto.response.BookResponseDto;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import dev.library.backend.repositories.BookRepository;
import dev.library.backend.services.BookService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/books")
public class BookController {
    private final BookRepository bookRepository;
    private final BookService bookService;
    private final BookMapper bookMapper;
    @GetMapping("/")
    public ResponseEntity<?> getBooks(@RequestParam(defaultValue = "0") int page , @RequestParam(defaultValue = "10") int size , @RequestParam(defaultValue = "title") String sortBy, @RequestParam(defaultValue = "asc") String direction)
    {
        try
        {
            return new ResponseEntity<>(this.bookMapper.toDataTransferObjects(this.bookRepository.findAll()), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getBook(@PathVariable Long id)
    {
        try
        {
            return new ResponseEntity<>(bookService.getBook(id), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/search={search}")
    public ResponseEntity<?> getBookBySearch(@PathVariable String search)
    {
        try
        {
            return new ResponseEntity<>(this.bookService.getBooksBySearch(search), HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage() , HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping(value = "/create" , consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> createBook(@ModelAttribute BookRequestDto bookRequestDto , @RequestPart("file") MultipartFile file)
    {
        try
        {
            if (file.isEmpty())
            {
                throw new FileNotFoundException("File is empty");
            }
            return new ResponseEntity<>(this.bookService.createBook(bookRequestDto , file) , HttpStatus.CREATED);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/latest")
    public ResponseEntity<List<BookResponseDto>> getLatestBooks() {
        List<BookResponseDto> latestBooks = bookService.getLatestBooks();
        return new ResponseEntity<>(latestBooks, HttpStatus.OK);
    }

    @GetMapping("/topbooks")
    public ResponseEntity<List<BookResponseDto>> getTopBooks(){
        List<BookResponseDto> topbooks=bookService.getTopBooks();
        return new ResponseEntity<>(topbooks,HttpStatus.OK);
    }

    @GetMapping("/categorie={categorie}")
    public ResponseEntity <List<BookResponseDto>> getBooksByCategories(@PathVariable String categorie){
        return new ResponseEntity<>(this.bookService.getBooksByCategories(categorie),HttpStatus.OK);

    }
//    @PreAuthorize("hasRole('LIBRARIAN')")
//    @PutMapping("/update/{id}")
//    public Book updateBook( @RequestBody Book book) {
//        return this.bookService.updateBook(book);
//    }
//    @PreAuthorize("hasRole('LIBRARIAN')")
//    @DeleteMapping("/delete/{id}")
//    public void deleteBook(@PathVariable Long id) {
//        this.bookService.deleteBook(id);
//    }
}
