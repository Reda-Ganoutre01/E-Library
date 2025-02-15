package dev.library.backend.models;

import java.io.Serializable;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Date;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import dev.library.backend.models.enums.Status;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@NoArgsConstructor
@Data
@Table(name = "borrow_records")
public class BorrowRecord implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @CreatedDate
    @DateTimeFormat(pattern = "DD-MM-YYYY")
    private LocalDateTime borrowDate;
    @DateTimeFormat(pattern = "DD-MM-YYYY")
    private LocalDateTime returnDate;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonManagedReference
    private User user;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "book_id")
    private Book book;
    @Enumerated(EnumType.STRING)
    private Status status;
}
