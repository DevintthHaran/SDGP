package com.devintth.sdgp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="profiles")



public class Profile {
    @Id

    private String id;
    private String username;
    private String email;
    private String firstName;
    private String lastName;
    private String addressLine;
    private String state;
    private String facebookProfile;
    private String linkedinProfile;
    private String profilePicture;
}
