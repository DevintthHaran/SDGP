package com.devintth.sdgp.services;

import com.devintth.sdgp.model.JobApplication;
import com.devintth.sdgp.repository.JobApplicationRepository;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationService {
    private final JobApplicationRepository repository;

    public JobApplicationService(JobApplicationRepository repository) {
        this.repository = repository;
    }

    public JobApplication saveApplication(JobApplication application) {
        application.setAccepted(false); // default to pending
        return repository.save(application);
    }

    public void acceptApplication(String id) {
        repository.findById(id).ifPresent(application -> {
            application.setAccepted(true);
            repository.save(application);
        });
    }

    public void rejectApplication(String id) {
        repository.deleteById(id);
    }
}
