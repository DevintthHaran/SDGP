package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.Counselor;
import com.devintth.sdgp.service.CounselorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/counselors")
@CrossOrigin(origins = "http://localhost:3000")
public class CounselorController {

    @Autowired
    private CounselorService counselorService;

    @GetMapping
    public List<Counselor> getAllCounselors() {
        return counselorService.getAllCounselors();
    }

    @PutMapping("/{id}")
    public Counselor updateCounselorStatus(@PathVariable String id, @RequestBody Counselor counselor) {
        return counselorService.updateCounselorStatus(id, counselor);
    }

    @DeleteMapping("/{id}")
    public void deleteCounselor(@PathVariable String id) {
        counselorService.deleteCounselor(id);
    }
}
