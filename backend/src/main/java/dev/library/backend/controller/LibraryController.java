package dev.library.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.library.backend.models.Library;
import dev.library.backend.service.LibraryService;

@RestController
@CrossOrigin
@RequestMapping("/api/librarys")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @GetMapping
    public List<Library> getLibrarys() {
        return libraryService.getLibrarys();
    }

    @GetMapping("/{id}")
    public Library getLibrary(@PathVariable("id") Long id) {
        return libraryService.getLibrary(id);

    }

    @PostMapping
    public Library createLibrary(Library library) {
        return libraryService.createLibrary(library);
    }

    @PutMapping
    public Library updateLibrary(Library library) {
        return libraryService.updateLibrary(library);
    }

    @DeleteMapping("/{id}")
    public void deletelibrary(@PathVariable("id") Long id) {
        libraryService.deletelibrary(id);
    }
}
