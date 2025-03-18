package dev.library.backend.entities;


import java.util.Collection;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;

import dev.library.backend.entities.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    @Column(unique = true)
    private String email;

    @Column(unique = true)
    private String fullName;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.DETACH , orphanRemoval = true)
    @JsonBackReference
    private List<BorrowRecord> borrowRecords;

    @Enumerated(EnumType.STRING)
    @ColumnDefault("'USER'")
    private Role role;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.DETACH , orphanRemoval = true)
    @JsonBackReference
    private List<Message> messages;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        return List.of(new SimpleGrantedAuthority("ROLE_" + role.toString()));
    }
    @Override
    public String getUsername()
    {
        return username;
    }
    @Override
    public String getPassword()
    {
        return password;
    }
}
