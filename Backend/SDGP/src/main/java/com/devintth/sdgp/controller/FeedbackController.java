package com.devintth.sdgp.controller;

import com.devintth.sdgp.model.Feedback;
import com.devintth.sdgp.services.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/addFeedback")
    public String addNewFeedBack(@RequestBody Feedback feedback){
      return  feedbackService.saveFeedback(feedback);

    }
    @GetMapping
    public List<Feedback> viewAllFeedBack(){
        return feedbackService.getAllFeedBack();

    }
}
