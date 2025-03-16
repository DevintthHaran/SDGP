package com.devintth.sdgp.controller;

import com.devintth.sdgp.repository.CounselorRepository;
import com.devintth.sdgp.model.Counselor; // Make sure this is the correct import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/counselors")
public class CounselorController {

    @Autowired
    private CounselorRepository counselorRepository;

    @GetMapping
    public List<Counselor> getAllCounselors() {
        return counselorRepository.findAll();
    }
}
