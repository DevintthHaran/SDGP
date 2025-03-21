package com.devintth.sdgp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "counselors")
public class Counselor {
    
    @Id
    private String id;  // MongoDB generates a unique ID
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String position;
    private String fileUrl;  // The URL of the uploaded CV
    private String status;  // Status of the candidate (Pending, Approved, Rejected)
    private String googleMeetLink;  // Link for the Google Meet interview
    private String counselorId;  // Assigned only if approved, unique ID for the counselor

    // Default constructor
    public Counselor() {}

    // Constructor to initialize the counselor object
    public Counselor(String firstName, String lastName, String email, String contactNumber, 
                     String position, String fileUrl, String status, String googleMeetLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.position = position;
        this.fileUrl = fileUrl;
        this.status = status;
        this.googleMeetLink = googleMeetLink;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getGoogleMeetLink() {
        return googleMeetLink;
    }

    public void setGoogleMeetLink(String googleMeetLink) {
        this.googleMeetLink = googleMeetLink;
    }

    public String getCounselorId() {
        return counselorId;
    }

    public void setCounselorId(String counselorId) {
        this.counselorId = counselorId;
    }

    @Override
    public String toString() {
        return "Counselor{" +
                "id='" + id + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", contactNumber='" + contactNumber + '\'' +
                ", position='" + position + '\'' +
                ", fileUrl='" + fileUrl + '\'' +
                ", status='" + status + '\'' +
                ", googleMeetLink='" + googleMeetLink + '\'' +
                ", counselorId='" + counselorId + '\'' +
                '}';
    }
}
