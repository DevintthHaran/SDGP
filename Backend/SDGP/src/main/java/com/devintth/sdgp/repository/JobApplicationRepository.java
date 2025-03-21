package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.JobApplication;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobApplicationRepository extends MongoRepository<JobApplication, String> {
    // Add custom queries if needed
}
