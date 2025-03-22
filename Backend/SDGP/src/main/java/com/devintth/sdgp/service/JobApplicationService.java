package com.devintth.sdgp.service;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.repository.JobApplicationRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;

    public List<JobApplication> getAllJobApplications() {
        return jobApplicationRepository.findAll();
    }

    // Save the job application to the database
    public JobApplication saveJobApplication(JobApplication jobApplication) {
        System.out.println("Service Layer: Saving Job Application -> " + jobApplication); // Debug print

        JobApplication savedApplication = jobApplicationRepository.save(jobApplication);

        System.out.println("Service Layer: Saved Job Application -> " + savedApplication); // Debug print

        return savedApplication;
    }
}
