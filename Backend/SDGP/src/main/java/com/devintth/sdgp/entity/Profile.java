package com.devintth.sdgp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="user_profile")


public class Profile {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
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
