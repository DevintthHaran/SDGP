package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends MongoRepository<Feedback, String> {
    // Add custom query methods here if needed
}
