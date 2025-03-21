package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.service.JobApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/job-apply")
@CrossOrigin(origins = "http://localhost:3000")
public class JobApplicationController {

    @Autowired
    private JobApplicationService jobApplicationService;

    @PostMapping
    public ResponseEntity<Object> submitJobApplication(@RequestBody JobApplication jobApplication) {
        try {
            // Save the application data
            JobApplication savedJobApplication = jobApplicationService.saveJobApplication(jobApplication);

            // Return a success response with the saved job application
            return ResponseEntity.status(HttpStatus.CREATED).body(savedJobApplication);
        } catch (Exception e) {
            // Handle error and return an appropriate response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error occurred while submitting the job application: " + e.getMessage());
        }
    }
}
