package com.devintth.sdgp.controller;
import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.repository.CounselorProjection;
import com.devintth.sdgp.services.CounselorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import java.util.Optional;

@RestController
@RequestMapping("/counselors")
@CrossOrigin(origins = "http://localhost:3000")
public class CounselorController {

    @Autowired
    private CounselorService counselorService;

    @GetMapping("/it")
    public ResponseEntity<List<CounselorProjection>> getApprovedCounselorsIT() {
        List<CounselorProjection> counselors = counselorService.getApprovedCounselorsByPosition("IT");

        if (!counselors.isEmpty()) {
            return ResponseEntity.ok(counselors);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
    @GetMapping("/science")
    public ResponseEntity<List<CounselorProjection>> getApprovedCounselorsScience() {
        List<CounselorProjection> counselors = counselorService.getApprovedCounselorsByPosition("Science");

        if (!counselors.isEmpty()) {
            return ResponseEntity.ok(counselors);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
    @GetMapping("/business")
    public ResponseEntity<List<CounselorProjection>> getApprovedCounselorsBusiness() {
        List<CounselorProjection> counselors = counselorService.getApprovedCounselorsByPosition("Business");

        if (!counselors.isEmpty()) {
            return ResponseEntity.ok(counselors);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
    @GetMapping("/olevel")
    public ResponseEntity<List<CounselorProjection>> getApprovedCounselorsOlevel() {
        List<CounselorProjection> counselors = counselorService.getApprovedCounselorsByPosition("O Level");

        if (!counselors.isEmpty()) {
            return ResponseEntity.ok(counselors);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
    @GetMapping("/alevel")
    public ResponseEntity<List<CounselorProjection>> getApprovedCounselorsAlevel() {
        List<CounselorProjection> counselors = counselorService.getApprovedCounselorsByPosition("A Level");

        if (!counselors.isEmpty()) {
            return ResponseEntity.ok(counselors);
        } else {
            return ResponseEntity.status(404).body(null);
        }
    }
}

