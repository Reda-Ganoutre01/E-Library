package dev.library.backend.dto.mappers;

import dev.library.backend.dto.response.CategoryResponseDto;
import dev.library.backend.entities.Category;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-02-18T01:49:36+0100",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 23.0.2 (Oracle Corporation)"
)
@Component
public class CategoryMapperImpl implements CategoryMapper {

    @Override
    public Category toEntity(CategoryResponseDto categoryResponseDto) {
        if ( categoryResponseDto == null ) {
            return null;
        }

        Category.CategoryBuilder category = Category.builder();

        category.id( categoryResponseDto.getId() );
        category.name( categoryResponseDto.getName() );

        return category.build();
    }

    @Override
    public CategoryResponseDto toDataTransferObject(Category entity) {
        if ( entity == null ) {
            return null;
        }

        CategoryResponseDto.CategoryResponseDtoBuilder categoryResponseDto = CategoryResponseDto.builder();

        categoryResponseDto.id( entity.getId() );
        categoryResponseDto.name( entity.getName() );

        return categoryResponseDto.build();
    }

    @Override
    public List<CategoryResponseDto> toDataTransferObjects(List<Category> entities) {
        if ( entities == null ) {
            return null;
        }

        List<CategoryResponseDto> list = new ArrayList<CategoryResponseDto>( entities.size() );
        for ( Category category : entities ) {
            list.add( toDataTransferObject( category ) );
        }

        return list;
    }
}
