package com.devintth.sdgp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "job_application")
public class JobApplication  {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private String contactNumber;
    private String position;
    private String fileUrl;  // Store Cloudinary file URL

    private String status = "Pending";
    private String googleMeetLink = "";
}
