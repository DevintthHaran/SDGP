package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.repository.JobApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.io.IOException;

@RestController
@RequestMapping("/api/job-apply")
public class JobApplicationController {

    @Autowired
    private JobApplicationRepository repository;

    @PostMapping
    public ResponseEntity<String> submitJobApplication(
        @RequestParam String firstName,
        @RequestParam String lastName,
        @RequestParam String email,
        @RequestParam String contactNumber,
        @RequestParam String position,
        @RequestParam("file") MultipartFile file
    ) {
        try {
            JobApplication application = new JobApplication(firstName, lastName, email, contactNumber, position, file.getOriginalFilename());
            repository.save(application);
            return ResponseEntity.ok("Application submitted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to submit application.");
        }
    }
}