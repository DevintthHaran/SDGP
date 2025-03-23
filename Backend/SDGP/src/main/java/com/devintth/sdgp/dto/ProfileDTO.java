package com.devintth.sdgp.dto;

public class ProfileDTO {

    private GeneralDetailsDTO general;
    private PersonalDetailsDTO personal;
    private AddressDetailsDTO address;
    private SocialDetailsDTO social;
    private String profilePicture;

    // Default Constructor
    public ProfileDTO() {}

    // Getters and Setters
    public GeneralDetailsDTO getGeneral() {
        return general;
    }

    public void setGeneral(GeneralDetailsDTO general) {
        this.general = general;
    }

    public PersonalDetailsDTO getPersonal() {
        return personal;
    }

    public void setPersonal(PersonalDetailsDTO personal) {
        this.personal = personal;
    }

    public AddressDetailsDTO getAddress() {
        return address;
    }

    public void setAddress(AddressDetailsDTO address) {
        this.address = address;
    }

    public SocialDetailsDTO getSocial() {
        return social;
    }

    public void setSocial(SocialDetailsDTO social) {
        this.social = social;
    }

    public String getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(String profilePicture) {
        this.profilePicture = profilePicture;
    }

    // Inner classes with Getters, Setters, and Constructors
    public static class GeneralDetailsDTO {
        private String username;
        private String email;

        public GeneralDetailsDTO() {}

        public GeneralDetailsDTO(String username, String email) {
            this.username = username;
            this.email = email;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }

    public static class PersonalDetailsDTO {
        private String firstName;
        private String lastName;

        public PersonalDetailsDTO() {}

        public PersonalDetailsDTO(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
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
    }

    public static class AddressDetailsDTO {
        private String addressLine;
        private String state;

        public AddressDetailsDTO() {}

        public AddressDetailsDTO(String addressLine, String state) {
            this.addressLine = addressLine;
            this.state = state;
        }

        public String getAddressLine() {
            return addressLine;
        }

        public void setAddressLine(String addressLine) {
            this.addressLine = addressLine;
        }

        public String getState() {
            return state;
        }

        public void setState(String state) {
            this.state = state;
        }
    }

    public static class SocialDetailsDTO {
        private String facebookProfile;
        private String linkedinProfile;

        public SocialDetailsDTO() {}

        public SocialDetailsDTO(String facebookProfile, String linkedinProfile) {
            this.facebookProfile = facebookProfile;
            this.linkedinProfile = linkedinProfile;
        }

        public String getFacebookProfile() {
            return facebookProfile;
        }

        public void setFacebookProfile(String facebookProfile) {
            this.facebookProfile = facebookProfile;
        }

        public String getLinkedinProfile() {
            return linkedinProfile;
        }

        public void setLinkedinProfile(String linkedinProfile) {
            this.linkedinProfile = linkedinProfile;
        }
    }
}
