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
    private String contactNumber;
    private String position;
    private String fileName;

    public JobApplication(String firstName, String lastName, String email, String contactNumber, String position, String fileName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.position = position;
        this.fileName = fileName;
    }

    // Getters and Setters
    public String getId() { return id; }
    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getContactNumber() { return contactNumber; }
    public void setContactNumber(String contactNumber) { this.contactNumber = contactNumber; }
    public String getPosition() { return position; }
    public void setPosition(String position) { this.position = position; }
    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }
}
