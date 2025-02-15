package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.models.Category;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    Category toEntity(CategoryResponseDto categoryResponseDto);
    CategoryResponseDto toDataTransferObject(Category entity);
    List<CategoryResponseDto> toDataTransferObjects(List<Category> entities);
}
