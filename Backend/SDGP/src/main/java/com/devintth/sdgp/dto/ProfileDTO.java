package com.devintth.sdgp.dto;

import lombok.Builder;
import lombok.Data;

@Data
public class ProfileDTO {

    private GeneralDetailsDTO general;
    private PersonalDetailsDTO personal;
    private AddressDetailsDTO address;
    private SocialDetailsDTO social;
    private String profilePicture;


    @Data
    @Builder
    public static class GeneralDetailsDTO {
        private String username;
        private String email;
    }
    @Data
    @Builder
    public static class PersonalDetailsDTO{
        private String firstName;
        private String lastName;
    }
    @Data
    @Builder
    public static class AddressDetailsDTO{
        private String addressLine;
        private String state;
    }
    @Data
    @Builder
    public static class SocialDetailsDTO{
        private String facebookProfile;
        private String linkedinProfile;

    }

}
