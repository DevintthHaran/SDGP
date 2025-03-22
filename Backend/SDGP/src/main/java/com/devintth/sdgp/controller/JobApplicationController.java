package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.service.JobApplicationService;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

// import java.util.Map;

@RestController
@RequestMapping("/job-apply")
@CrossOrigin(origins = "http://localhost:3000")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;


    
    

    @PostMapping
    public ResponseEntity<Object> submitJobApplication(@RequestBody JobApplication jobApplication) {
        try {
            System.out.println("Received Job Application: " + jobApplication); // Debug print

            // Save the application data
            JobApplication savedJobApplication = jobApplicationService.saveJobApplication(jobApplication);

            System.out.println("Saved Job Application: " + savedJobApplication); // Debug print

            // Return a success response with the saved job application
            return ResponseEntity.status(HttpStatus.CREATED).body(savedJobApplication);
        } catch (Exception e) {
            // Handle error and return an appropriate response
            System.out.println("Error occurred: " + e.getMessage()); // Debug print
            e.printStackTrace(); // Print full error details

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while submitting the job application: " + e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity<Object> getAllApplications() {
        try {
            List<JobApplication> applications = jobApplicationService.getAllJobApplications();
            return ResponseEntity.ok(applications);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching job applications: " + e.getMessage());
        }
    }



}
