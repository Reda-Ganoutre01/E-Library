package dev.library.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileUploadService {
    private final StaticResourceService staticResourceService;
    @Autowired
    public FileUploadService(StaticResourceService staticResourceService) {
        this.staticResourceService = staticResourceService;
    }
    public String uploadFile(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(this.staticResourceService.getStaticResourcePathString());
        System.out.println(uploadPath);
        if (!Files.exists(uploadPath))
        {
            Files.createDirectories(uploadPath);
        }
        String fileName = this.randomFileName(file);
        Path path = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), path);
        return fileName;
    }
    public String randomFileName(MultipartFile file) {
        return UUID.randomUUID() + "." + file.getOriginalFilename();
    }
}
