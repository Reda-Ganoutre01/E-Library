package dev.library.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import dev.library.backend.models.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category , Long> {}