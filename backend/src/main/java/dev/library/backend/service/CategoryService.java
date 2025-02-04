package dev.library.backend.service;

import org.springframework.stereotype.Service;


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
