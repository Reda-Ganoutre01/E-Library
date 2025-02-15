package dev.library.backend.models;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.CopyOnWriteArraySet;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name = "books")
public class Book implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cover;
    private String title;
    @ManyToOne(fetch = FetchType.EAGER , cascade = CascadeType.ALL)
    private Category category;
    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference
    private List<BorrowRecord> borrowRecords = new ArrayList<>();
    private String author;
    private String description;
    private String isbn;
    private int copies;
}
