
package dev.library.backend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.library.backend.models.Library;

@Repository
public interface LibraryRepository extends JpaRepository<Library,Long>{
    
}
