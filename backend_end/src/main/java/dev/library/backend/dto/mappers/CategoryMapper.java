package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.entities.Category;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CategoryMapper {

    CategoryMapper INSTANCE = Mappers.getMapper(CategoryMapper.class);

    Category toEntity(CategoryResponseDto categoryResponseDto);
    CategoryResponseDto toDataTransferObject(Category entity);
    List<CategoryResponseDto> toDataTransferObjects(List<Category> entities);
}
