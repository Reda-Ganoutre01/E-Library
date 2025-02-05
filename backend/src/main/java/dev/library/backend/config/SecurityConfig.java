package dev.library.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorizeRequests ->
                authorizeRequests
                    .requestMatchers("/api/**").permitAll() // Allow public access to /api/**
                    .anyRequest().authenticated() // Secure other endpoints
            )
            .csrf().disable(); // Disable CSRF for simplicity (if needed)
        return http.build();
    }
}


// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.core.userdetails.User;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.provisioning.InMemoryUserDetailsManager;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class MySecurityConfig {

//     @Bean
//     public UserDetailsService userDetailsService() {
//         InMemoryUserDetailsManager userDetailsService = new InMemoryUserDetailsManager();

//         UserDetails user = User.withUsername("redux")
//                 .password(passwordEncoder().encode("1234"))
//                 .authorities("read")
//                 .build();

//         userDetailsService.createUser(user);
//         return userDetailsService;
//     }

//     @Bean
//     public BCryptPasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }

//     @Bean
//     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//         http
//             .formLogin()
//             .and()
//             .authorizeHttpRequests()
//             .anyRequest()
//             .authenticated();
        
//         return http.build();
//     }
// }