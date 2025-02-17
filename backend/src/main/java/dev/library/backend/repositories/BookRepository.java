package dev.library.backend.repositories;

import dev.library.backend.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("SELECT b FROM Book b WHERE LOWER(b.title) " + "LIKE LOWER(CONCAT('%', :search, '%')) " +
            "OR LOWER(b.author) LIKE LOWER(CONCAT('%', :search, '%')) " + "OR LOWER(b.category.name) LIKE LOWER(CONCAT('%', :search, '%')) AND b.copies > 0")

    List<Book> searchBooks(@Param("search") String search);
     @Query(value="SELECT * FROM books ORDER BY id DESC LIMIT 3", nativeQuery = true)

     List<Book> findThreeLatestBooks();
     @Query(value = "SELECT b.* FROM books b " + "INNER JOIN borrow_records bor ON b.id = bor.book_id " +
             "GROUP BY b.id " + "ORDER BY COUNT(bor.book_id) DESC", nativeQuery = true)

     List<Book> getTopBooks();
     @Query(value = "SELECT b.* FROM books b " + "INNER JOIN categories cat ON cat.id = b.category_id " +
             "WHERE LOWER(cat.name) LIKE LOWER(CONCAT('%', :categorie, '%'))", nativeQuery = true)

     List<Book> getBooksByCategories(@Param("category") String category);
}
