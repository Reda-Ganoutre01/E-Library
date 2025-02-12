package dev.library.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.library.backend.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category , Long> {}