package dev.library.backend.config;

import dev.library.backend.security.JwtAuthenticationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    @Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authorizeRequests -> {
                    authorizeRequests.requestMatchers("/api/v1/auth/authenticate", "/api/v1/auth/register").permitAll();
                    authorizeRequests.requestMatchers("/storage/**").permitAll();

                    
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/borrowRecords/create").authenticated();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/messages/user/{userId}").authenticated();

                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/**").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/categories/").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/category={category}").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/search={search}").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/topbooks").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/books/{id}").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/borrowRecords/user/{id}").authenticated();

                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/borrowRecords/").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.DELETE, "/api/v1/borrowRecords/delete/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.PUT, "/api/v1/borrowRecords/update/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/borrowRecords/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/categories/create").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.DELETE, "/api/v1/categories/delete/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.PUT, "/api/v1/categories/update/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/categories/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/users/create").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/users/").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.DELETE, "/api/v1/users/delete/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/users/profile/{name}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.PUT, "/api/v1/users/update/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/users/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/books/create").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.DELETE, "/api/v1/books/delete/{id}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.PUT, "/api/v1/books/update/{bookId}").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/messages").hasRole("LIBRARIAN");
                    authorizeRequests.requestMatchers(HttpMethod.GET, "/api/v1/messages/{id}").hasRole("LIBRARIAN");

                    authorizeRequests.anyRequest().denyAll();
                })
                .sessionManagement(sessionManagement -> {
                    sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
                })
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}