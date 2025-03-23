package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.services.JobApplicationService;

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

    // Defines a POST endpoint to Create update data to mongodb
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

    // Defines a GET endpoint to retrieve all job applications
    @GetMapping
    public ResponseEntity<Object> getAllApplications() {
        try {
            // Calls the service layer to fetch all job applications from the database
            List<JobApplication> applications = jobApplicationService.getAllJobApplications();
            
            // Returns the list of job applications with an HTTP 200 (OK) response
            return ResponseEntity.ok(applications);
        } catch (Exception e) {
            // Handles any exceptions and returns an HTTP 500 (Internal Server Error) response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error fetching job applications: " + e.getMessage());
        }
    }




}
