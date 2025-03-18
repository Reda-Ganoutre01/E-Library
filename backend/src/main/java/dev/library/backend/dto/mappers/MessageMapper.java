package dev.library.backend.dto.mappers;

import org.mapstruct.*;
import org.mapstruct.factory.Mappers;
import dev.library.backend.entities.Message;
import dev.library.backend.dto.requests.MessageRequestDto;
import dev.library.backend.dto.response.MessageResponseDto;


@Mapper(componentModel = "spring")
public interface MessageMapper {

    MessageMapper INSTANCE = Mappers.getMapper(MessageMapper.class);

    Message toEntity(MessageRequestDto messageRequestDto);
    MessageResponseDto toDto(Message message);
}