//package com.feedback.service;
package com.devintth.sdgp.services;
import com.feedback.model.Feedback;
import com.feedback.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepository feedbackRepository;

    public String saveFeedback(Feedback feedback){
        feedbackRepository.save(feedback);
        return "Feedback saved successfully";

    }

    public List<Feedback> getAllFeedBack() {
        return feedbackRepository.findAll();
    }
}
