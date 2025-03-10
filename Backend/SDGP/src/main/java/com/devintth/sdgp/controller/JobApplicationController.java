package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.services.JobApplicationService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {
    private final JobApplicationService service;

    public JobApplicationController(JobApplicationService service) {
        this.service = service;
    }

    @PostMapping("/submit")
    public String submitApplication(
        @RequestParam String firstName,
        @RequestParam String lastName,
        @RequestParam String email,
        @RequestParam String[] appliedPositions,
        @RequestParam("cv") MultipartFile cv
    ) throws IOException {
        // Save CV to server
        String uploadDir = "uploads/";
        File uploadFile = new File(uploadDir + cv.getOriginalFilename());
        cv.transferTo(uploadFile);

        // Save application to MongoDB
        JobApplication application = new JobApplication();
        application.setFirstName(firstName);
        application.setLastName(lastName);
        application.setEmail(email);
        application.setAppliedPositions(appliedPositions);
        application.setCvFileName(cv.getOriginalFilename());
        application.setCvFilePath(uploadFile.getAbsolutePath());

        service.saveApplication(application);
        return "Application submitted successfully!";
    }

    @PostMapping("/accept/{id}")
    public String acceptApplication(@PathVariable String id) {
        service.acceptApplication(id);
        return "Application accepted!";
    }

    @DeleteMapping("/reject/{id}")
    public String rejectApplication(@PathVariable String id) {
        service.rejectApplication(id);
        return "Application rejected!";
    }
}