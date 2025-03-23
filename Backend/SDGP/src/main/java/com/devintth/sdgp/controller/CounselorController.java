package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.services.CounselorService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/counselors")
@CrossOrigin(origins = "http://localhost:3000")
public class CounselorController {

    @Autowired
    private CounselorService counselorService;

    // Fetch only pending counselors
    @GetMapping
    public List<Counselor> getPendingCounselors(@RequestParam(required = false) String status) {
        if ("Pending".equalsIgnoreCase(status)) {
            return counselorService.getPendingCounselors();
        }
        return List.of(); // Return empty list if status filter is incorrect
    }

    // Approve a counselor
    @PutMapping("/{id}")
    public Counselor approveCounselor(@PathVariable String id) {
        return counselorService.approveCounselor(id);
    }

    // Reject (delete) a counselor
    @DeleteMapping("/{id}")
    public void rejectCounselor(@PathVariable String id) {
        counselorService.rejectCounselor(id);
    }
}
