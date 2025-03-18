package dev.library.backend.entities;

import java.io.Serializable;
import java.util.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "books")
public class Book implements Serializable
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cover;
    private String title;

    @ManyToOne(fetch = FetchType.EAGER , cascade = CascadeType.DETACH)
    private Category category;

    @OneToMany(mappedBy = "book", cascade = CascadeType.DETACH, orphanRemoval = true)
    @JsonBackReference
    private List<BorrowRecord> borrowRecords = new ArrayList<>();

    private String author;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String isbn;

    private int copies;
}
