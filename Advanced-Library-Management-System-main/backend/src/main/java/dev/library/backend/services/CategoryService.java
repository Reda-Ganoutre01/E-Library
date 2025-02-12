package dev.library.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import dev.library.backend.dto.requests.CategoryRequestDto;
import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.dto.mappers.CategoryMapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import dev.library.backend.models.Category;
import dev.library.backend.repositories.CategoryRepository;

@Service
public class CategoryService {
    private final CategoryMapperService categoryMapperService;
    private final CategoryRepository categoryRepository;
    @Autowired
    public CategoryService(CategoryRepository categoryRepository , CategoryMapperService categoryMapperService) {
        this.categoryRepository = categoryRepository;
        this.categoryMapperService = categoryMapperService;
    }
    public List<CategoryResponseDto> getCategories() {
        return this.categoryRepository
                .findAll()
                .stream()
                .map(this.categoryMapperService::toDataTransferObject)
                .collect(Collectors.toList());
    }
    public CategoryResponseDto getCategory(Long id) {
        if (this.categoryRepository.existsById(id)) {
            Category category = this.categoryRepository.findById(id).orElseThrow();
            return this.categoryMapperService.toDataTransferObject(category);
        }
        return null;
    }
    public CategoryResponseDto createCategory(CategoryRequestDto request) {
        Category category = new Category();
        category.setName(request.getName());
        this.categoryRepository.save(category);
        return this.categoryMapperService.toDataTransferObject(category);
    }
    public CategoryResponseDto updateCategory(Long id, CategoryRequestDto request) {
        if (!this.categoryRepository.existsById(id)) {
            throw new EntityNotFoundException("Category not found with ID: " + id);
        }
        Category category = this.categoryRepository.findById(id).orElseThrow();
        category.setName(request.getName());
        return this.categoryMapperService.toDataTransferObject(this.categoryRepository.save(category));
    }
    public void deleteCategory(Long id) {
        if (this.getCategory(id) == null) {
            throw new EntityNotFoundException("Category not found with ID: " + id);
        }
        this.categoryRepository.deleteById(id);
    }
}
