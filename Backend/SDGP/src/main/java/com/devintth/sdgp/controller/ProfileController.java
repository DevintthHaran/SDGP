package com.devintth.sdgp.controller;

import com.devintth.sdgp.dto.ProfileDTO;
import com.devintth.sdgp.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @PostMapping("/create")
    public ProfileDTO createNewProfile(@RequestBody ProfileDTO profileDTO) {
        return profileService.saveProfile(profileDTO);
    }

    @GetMapping("/view/{username}")
    public ProfileDTO viewProfile(@PathVariable String username) {
        return profileService.getProfileByUsername(username);
    }

    @GetMapping
    public ResponseEntity<ProfileDTO> getProfile() {
        ProfileDTO profile = profileService.getProfileByUsername("default"); // Modify logic if needed
        if (profile == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(profile);
    }

    @PutMapping
    public ResponseEntity<ProfileDTO> updateProfile(@RequestBody ProfileDTO profileDTO) {
        if (profileDTO.getGeneral() == null || profileDTO.getGeneral().getUsername() == null) {
            return ResponseEntity.badRequest().build();
        }
        ProfileDTO updatedProfile = profileService.saveProfile(profileDTO);
        return ResponseEntity.ok(updatedProfile);
    }
}
