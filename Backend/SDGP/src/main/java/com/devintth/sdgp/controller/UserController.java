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
    public ResponseEntity<?> signup(@Valid @RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.signUp(user));  // Successful signup
        } catch (RuntimeException e) {
            // Return error message as Map in response body
            return ResponseEntity.badRequest().body(Map.of("message", "Email already exists"));
        }
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

    @GetMapping("/accessibility/{email}")
    public ResponseEntity<?> getAccessibility(@PathVariable String email) {
        User user = userService.findByEmail(email);
        if (user != null) {
            return ResponseEntity.ok(Map.of("accessible", user.getAccessible()));
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "User not found"));
        }
    }

    @PutMapping("/accessibility")
    public ResponseEntity<?> updateAccessibility(@RequestBody Map<String, Object> request) {
        String email = (String) request.get("email");
        int accessible = (int) request.get("accessible");

        boolean updated = userService.updateAccessibility(email, accessible);
        if (updated) {
            return ResponseEntity.ok(Map.of("message", "Accessibility updated successfully"));
        } else {
            return ResponseEntity.status(404).body(Map.of("message", "User not found"));
        }
    }



}