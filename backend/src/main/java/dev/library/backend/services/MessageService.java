package dev.library.backend.services;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import dev.library.backend.dto.mappers.MessageMapper;
import dev.library.backend.dto.requests.MessageRequestDto;
import dev.library.backend.dto.response.MessageResponseDto;
import dev.library.backend.entities.Message;
import dev.library.backend.entities.User;
import dev.library.backend.repositories.MessageRepository;
import dev.library.backend.repositories.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final MessageMapper messageMapper;
    public MessageResponseDto createMessage(MessageRequestDto messageRequestDto) {
        User user = userRepository.findById(messageRequestDto.getUserId()).orElseThrow(() -> new RuntimeException("User not found"));
        Message message = messageMapper.toEntity(messageRequestDto);
        message.setUser(user);
        Message savedMessage = messageRepository.save(message);
        return messageMapper.toDto(savedMessage);
    }
    public List<MessageResponseDto> getAllMessages() {
        return messageRepository.findAll().stream().map(messageMapper::toDto).collect(Collectors.toList());
    }
    public MessageResponseDto getMessageById(Long id) {
        Message message = messageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Message not found"));
        return messageMapper.toDto(message);
    }
    public void deleteMessage(Long id) {
        messageRepository.deleteById(id);
    }
    public List<MessageResponseDto> getUserMessages(Long userId) {
        User user = this.userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + userId));
        return this.messageRepository.findByUser(user).stream()
                .map(messageMapper::toDto)
                .collect(Collectors.toList());
    }
}
