package com.devintth.sdgp.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.devintth.sdgp.services.CareerReportService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CareerReportController {
    private final CareerReportService CareerReportService;
    public CareerReportController(CareerReportService CareerReportService) {
        this.CareerReportService = CareerReportService;
    }
    @GetMapping("/generate-career-report")
    public String generateQuestion(@RequestParam List<String> questions, @RequestParam List<String> answers) {
        return CareerReportService.generateCareerReport(questions,answers);
    }
    @GetMapping("/career-key-response")
    public String careerKeyResponse(@RequestParam List<String> questions, @RequestParam List<String> answers) {
        return CareerReportService.careerKeyResponse(questions, answers);
    }
    @GetMapping("/potential-growth")
    public String potentialGrowth(@RequestParam List<String> questions, @RequestParam List<String> answers) {
        return CareerReportService.potentialGrowth(questions, answers);
    }
}
