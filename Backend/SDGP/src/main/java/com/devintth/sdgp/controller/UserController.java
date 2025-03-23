package com.devintth.sdgp.controller;


import com.devintth.sdgp.model.User;
import com.devintth.sdgp.services.UserService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
@Slf4j

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@Valid @RequestBody User user){
        try{
            return ResponseEntity.ok(userService.signUp(user));
        } catch (Exception e){
            return ResponseEntity.badRequest().body((User) Map.of("message", "Email already in use"));}
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signIn(@RequestBody User user) {
        boolean isAuthenticated = userService.signIn(user.getUserEmailId(), user.getUserPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok(Map.of("message", "Login Successful"));
        } else {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }
    }

}


