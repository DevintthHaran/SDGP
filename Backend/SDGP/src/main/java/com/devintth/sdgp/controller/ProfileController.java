package com.devintth.sdgp.controller;


import com.devintth.sdgp.dto.ProfileDTO;
import com.devintth.sdgp.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
public class ProfileController {
    @Autowired
    private ProfileService profileService;
    @PostMapping("/create")
    public ProfileDTO createNewProfile(@RequestBody  ProfileDTO profileDTO){
      return  profileService.saveProfile(profileDTO);


    }
    @GetMapping("/view/{username}")
    public ProfileDTO viewProfile(@PathVariable String username){
        return  profileService.getProfileByUsername(username);


    }
}
