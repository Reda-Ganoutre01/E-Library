package dev.library.backend.utils;

import org.springframework.stereotype.Component;


import java.nio.file.Paths;

@Component
public class StaticResourceResolver
{
    public String getStaticResourcePathString()
    {
        String projectRoot = System.getProperty("user.dir");
        return Paths.get(projectRoot ,"src", "main", "resources", "static" , "storage").toString();
    }
}
