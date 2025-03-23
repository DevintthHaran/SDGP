package com.devintth.sdgp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "counselors") // Connects to the "Counselor" collection
public class Counselor {

    @Id
    private String id;

    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String position;
    private String link;
    private String file;
    private String status;

    // Default constructor (required for Spring Boot)
    public Counselor() {}

    // Parameterized constructor
    public Counselor(String firstName, String lastName, String email, String contactNumber, String position, String link, String file,String status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.position = position;
        this.link = link;
        this.file = file;
        this.status = status;
    }

    // ✅ Getters
    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getContactNumber() {
        return contactNumber;
    }

    public String getPosition() {
        return position;
    }

    public String getLink() {
        return link;
    }

    public String getFile() {
        return file;
    }
    public String getStatus() {
        return status;
    }

    // ✅ Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setContactNumber(String contactNumber) {
        this.contactNumber = contactNumber;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public void setFile(String file) {
        this.file = file;
    }
    public void setStatus(String status) {
        this.status = status;
    }
}
