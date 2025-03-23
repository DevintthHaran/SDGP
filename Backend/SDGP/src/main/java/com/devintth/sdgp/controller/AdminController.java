package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.Admin;
import com.devintth.sdgp.services.AdminService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService counselorService;

    // Fetch only pending counselors
    @GetMapping
    public List<Admin> getPendingCounselors(@RequestParam(required = false) String status) {
        if ("Pending".equalsIgnoreCase(status)) {
            return counselorService.getPendingCounselors();
        }
        return List.of(); // Return empty list if status filter is incorrect
    }

    // Approve a counselor
    @PutMapping("/{id}")
    public Admin approveCounselor(@PathVariable String id) {
        return counselorService.approveCounselor(id);
    }

    // Reject (delete) a counselor
    @DeleteMapping("/{id}")
    public void rejectCounselor(@PathVariable String id) {
        counselorService.rejectCounselor(id);
    }
}
