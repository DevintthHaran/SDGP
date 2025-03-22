//package com.feedback.controller;
package com.devintth.sdgp.controller;

import com.feedback.model.Feedback;
import com.feedback.service.FeedbackService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/feedback")
public class FeedbackController {

    private final FeedbackService feedbackService;

    @PostMapping("/addFeedback")
    public String addNewFeedBack(@RequestBody Feedback feedback){
      return  feedbackService.saveFeedback(feedback);

    }
    @GetMapping
    public List<Feedback> viewAllFeedBack(){
        return feedbackService.getAllFeedBack();

    }
}
