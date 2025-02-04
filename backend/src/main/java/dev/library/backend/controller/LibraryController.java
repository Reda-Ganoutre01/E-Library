package dev.library.backend.controller;

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
