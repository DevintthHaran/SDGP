package com.devintth.sdgp.services;




import com.devintth.sdgp.dto.ProfileDTO;
import com.devintth.sdgp.entity.Profile;
import com.devintth.sdgp.repository.ProfileRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {
    @Autowired
    private ProfileRepository profileRepository;

    private ProfileDTO saveProfile(ProfileDTO profileDTO){
        Profile profile=convertDtoToEntity(profileDTO);
        Profile savedProfile=profileRepository.save(profile);
        return convertEntityToDto(savedProfile);

    }
    public ProfileDTO getProfileByUsername(String username){
        Profile profile=profileRepository.findByUsername(username);
        return convertEntityToDto(profile);
    }

    private Profile convertDtoToEntity(ProfileDTO dto) {
        Profile profile = new Profile();


        profile.setUsername(dto.getGeneral().getUsername());
        profile.setEmail(dto.getGeneral().getEmail());
        profile.setFirstName(dto.getPersonal().getFirstName());
        profile.setLastName(dto.getPersonal().getLastName());
        profile.setAddressLine(dto.getAddress().getAddressLine());
        profile.setState(dto.getAddress().getState());
        profile.setFacebookProfile(dto.getSocial().getFacebookProfile());
        profile.setLinkedinProfile(dto.getSocial().getLinkedinProfile());

        return profile;
    }
    private ProfileDTO convertEntityToDto(Profile profile) {
        ProfileDTO dto = new ProfileDTO();


       dto.setGeneral(ProfileDTO.GeneralDetailsDTO.builder()
               .username(profile.getUsername())
               .email(profile.getEmail())
               .build());



        dto.setPersonal(ProfileDTO.PersonalDetailsDTO.builder()
                .firstName(profile.getFirstName())
                .lastName(profile.getLastName())
                .build());

        
        dto.setAddress(ProfileDTO.AddressDetailsDTO.builder()
                        .addressLine(profile.getAddressLine())
                        .state(profile.getState())
                .build());
        dto.setSocial(ProfileDTO.SocialDetailsDTO.builder()
                .facebookProfile(profile.getFacebookProfile())
                .linkedinProfile(profile.getLinkedinProfile())
                        .build());
       dto.setProfilePicture(profile.getProfilePicture());

        return dto;
    }
    }

