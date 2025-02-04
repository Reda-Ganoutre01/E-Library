package dev.library.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import dev.library.backend.models.Category;
import dev.library.backend.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getCategorys() {
        return categoryRepository.findAll();
    }

    public Category getCategory(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Category not found with ID: " + id));
    }

    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category updCategory(Category category) {
        if (!categoryRepository.existsById(category.getId())) {
            throw new EntityNotFoundException("category not found with ID: " + category.getId());
        }
        return categoryRepository.save(category);
    }

    public void deleteCategory( Long id){
        if(! categoryRepository.existsById(id)){
            throw new EntityNotFoundException("id Category not found "+ id);
        }
        categoryRepository.deleteById(id);
    }

}
