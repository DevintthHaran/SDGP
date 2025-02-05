package com.devintth.sdgp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.devintth.sdgp.services.QuestionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class InterviewController {

    private final QuestionService questionService;

    public InterviewController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("/generate-question")
    public String generateQuestion(@RequestParam String role) {
        return questionService.fetchQuestion(role);
    }
}

