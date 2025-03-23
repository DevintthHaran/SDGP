package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.Counselor;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

// Repository interface for Counselor entity, extending MongoRepository to provide CRUD operations
public interface CounselorRepository extends MongoRepository<Counselor, String> {
    
    // Custom query method to find counselors based on their status
    List<Counselor> findByStatus(String status);
}
