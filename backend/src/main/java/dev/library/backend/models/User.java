package dev.library.backend.models;

import java.util.List;

import org.hibernate.annotations.ColumnDefault;

import dev.library.backend.models.enums.Role;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@NoArgsConstructor
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true , nullable = false)
    private String username;
    private String password;

    @Column(unique = true)
    private String email;

    private String fullName;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<BorrowRecord> borrowRecords;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'USER'")
    private Role role;
}
