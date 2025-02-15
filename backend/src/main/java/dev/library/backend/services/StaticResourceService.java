package dev.library.backend.services;

import org.springframework.stereotype.Service;

import java.nio.file.Paths;

@Service
public class StaticResourceService
{
    public String getStaticResourcePathString() {
        String projectRoot = System.getProperty("user.dir");
        return Paths.get(projectRoot ,"src", "main", "resources", "static" , "storage").toString();
    }
}
