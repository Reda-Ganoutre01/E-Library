package dev.library.backend.service;

import org.springframework.stereotype.Service;


@Service
public class LibraryService {
    
    @Autowired
    private LibraryRepository libraryRepository;

    public List<Library> getLibrarys(){
        return libraryRepository.findAll();
    }
    
    public Library getLibrary(Long id){
        return libraryRepository.findById(id).orElseThrow(()
         -> new EntityNotFoundException("Library not found with id: " + id));
    }
    public Library createLibrary(Library library){
        return libraryRepository.save(library);
    }
    public Library updateLibrary(Library library){
        if (! libraryRepository.existsById(library.getId())) {
            throw new EntityNotFoundException("library not found with id: " + library.getId());        
        }
        return libraryRepository.save(library);
    }
    public void deletelibrary(Long id){
        if (! libraryRepository.existsById(id)) {
            throw new EntityNotFoundException("library not found with id: " +id);        
        }
        libraryRepository.deleteById(id);
    }
}

