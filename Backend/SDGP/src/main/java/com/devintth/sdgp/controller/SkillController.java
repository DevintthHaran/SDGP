package com.devintth.sdgp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.devintth.sdgp.services.SkillService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController

public class SkillController {
    private final SkillService SkillService;

    public SkillController(SkillService SkillService) {
        this.SkillService = SkillService;
    }
    @GetMapping("/generate-skill-question")
    public String generateQuestion(@RequestParam String Category, @RequestParam String question, @RequestParam String answer) {
        System.out.println("Category: " + Category);
        System.out.println("Previous Question: " + question);
        System.out.println("User Answer: " + answer);
        return SkillService.nextSkillQuestion(Category, question, answer);
    }

    @GetMapping("/generate-skill-mcq")
    public List<String> generateMCQ(@RequestParam String question) {
        return SkillService.skillMCQChoices(question);
    }
}
