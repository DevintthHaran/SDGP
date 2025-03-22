package com.devintth.sdgp.service;

import com.devintth.sdgp.model.Feedback;
import com.devintth.sdgp.repository.FeedbackRepository;
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
