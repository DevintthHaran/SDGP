package com.devintth.sdgp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "job_applications")
public class JobApplication {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String[] appliedPositions;
    private String cvFileName;
    private String cvFilePath;
    private boolean isAccepted;

    // Getters and setters
}