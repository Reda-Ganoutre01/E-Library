    package dev.library.backend.models;

    import java.io.Serializable;
    import java.util.Collection;
    import java.util.HashSet;
    import java.util.List;
    import java.util.Set;

    import jakarta.persistence.*;
    import lombok.*;
    import org.hibernate.annotations.ColumnDefault;

    import dev.library.backend.models.enums.Role;
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
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return List.of(new SimpleGrantedAuthority("ROLE_" + role.toString()));
        }
        @Override
        public String getUsername() {
            return username;
        }
        @Override
        public String getPassword() {
            return password;
        }
    }
