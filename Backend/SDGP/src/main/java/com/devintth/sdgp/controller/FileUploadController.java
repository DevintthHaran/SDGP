package com.devintth.sdgp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/job-apply")
public class FileUploadController {

    private static final String UPLOAD_DIR = "/path/to/upload/directory"; // Adjust to your directory path

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("Please upload a valid file.");
        }

        if (file.getSize() > 10 * 1024 * 1024) { // 10MB file size limit
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                 .body("File must be less than 10MB.");
        }

        try {
            // Create the upload directory if it doesn't exist
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Get the original file name and create a file object to store the file
            File uploadedFile = new File(uploadDir, file.getOriginalFilename());

            // Save the file to the specified location
            file.transferTo(uploadedFile);

            return ResponseEntity.ok("File uploaded successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Error while uploading the file: " + e.getMessage());
        }
    }
}
