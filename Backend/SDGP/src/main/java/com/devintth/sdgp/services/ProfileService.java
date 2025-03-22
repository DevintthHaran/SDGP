package com.devintth.sdgp.services;

import com.devintth.sdgp.dto.ProfileDTO;
import com.devintth.sdgp.entity.Profile;
import com.devintth.sdgp.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public ProfileDTO saveProfile(ProfileDTO profileDTO) {
        Profile profile = convertDtoToEntity(profileDTO);
        Profile savedProfile = profileRepository.save(profile);
        return convertEntityToDto(savedProfile);
    }

    public ProfileDTO getProfileByUsername(String username) {
        Optional<Profile> profile = profileRepository.findByUsername(username);
        return profile.map(this::convertEntityToDto).orElse(null);
    }

    private Profile convertDtoToEntity(ProfileDTO dto) {
        Profile profile = new Profile();

        if (dto.getGeneral() != null) {
            profile.setUsername(dto.getGeneral().getUsername());
            profile.setEmail(dto.getGeneral().getEmail());
        }
        if (dto.getPersonal() != null) {
            profile.setFirstName(dto.getPersonal().getFirstName());
            profile.setLastName(dto.getPersonal().getLastName());
        }
        if (dto.getAddress() != null) {
            profile.setAddressLine(dto.getAddress().getAddressLine());
            profile.setState(dto.getAddress().getState());
        }
        if (dto.getSocial() != null) {
            profile.setFacebookProfile(dto.getSocial().getFacebookProfile());
            profile.setLinkedinProfile(dto.getSocial().getLinkedinProfile());
        }

        profile.setProfilePicture(dto.getProfilePicture());
        return profile;
    }

    private ProfileDTO convertEntityToDto(Profile profile) {
        ProfileDTO dto = new ProfileDTO();

        dto.setGeneral(new ProfileDTO.GeneralDetailsDTO(profile.getUsername(), profile.getEmail()));
        dto.setPersonal(new ProfileDTO.PersonalDetailsDTO(profile.getFirstName(), profile.getLastName()));
        dto.setAddress(new ProfileDTO.AddressDetailsDTO(profile.getAddressLine(), profile.getState()));
        dto.setSocial(new ProfileDTO.SocialDetailsDTO(profile.getFacebookProfile(), profile.getLinkedinProfile()));
        dto.setProfilePicture(profile.getProfilePicture());

        return dto;
    }
}
