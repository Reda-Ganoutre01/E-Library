package dev.library.backend.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "books")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cover;
    private String title;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Library library;
    @OneToMany(mappedBy = "book")
    private List<BorrowRecord> borrowRecords;
    private String author;
    private String description;
    private String isbn;
    private int copies;
}
