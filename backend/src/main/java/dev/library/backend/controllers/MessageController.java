package dev.library.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dev.library.backend.dto.requests.MessageRequestDto;
import dev.library.backend.dto.response.MessageResponseDto;
import dev.library.backend.services.MessageService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/messages")
@RequiredArgsConstructor
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping
    public ResponseEntity<MessageResponseDto> createMessage(@RequestBody MessageRequestDto messageRequestDto) {
        MessageResponseDto responseDto = messageService.createMessage(messageRequestDto);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<MessageResponseDto>> getAllMessages() {
        List<MessageResponseDto> messages = messageService.getAllMessages();
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MessageResponseDto> getMessageById(@PathVariable Long id) {
        MessageResponseDto message = messageService.getMessageById(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        messageService.deleteMessage(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserMessages(@PathVariable Long userId) {
        List<MessageResponseDto> messages = messageService.getUserMessages(userId);
        return ResponseEntity.ok(messages);
    }

}
