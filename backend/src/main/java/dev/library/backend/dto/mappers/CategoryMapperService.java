package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.models.Category;
import org.springframework.stereotype.Service;

@Service
public class CategoryMapperService {
    public CategoryResponseDto toDataTransferObject(Category category) {
        CategoryResponseDto categoryResponseDto = new CategoryResponseDto();
        categoryResponseDto.setId(category.getId());
        categoryResponseDto.setName(category.getName());
        return categoryResponseDto;
    }
}
