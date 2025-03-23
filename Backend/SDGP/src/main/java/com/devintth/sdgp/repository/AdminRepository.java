package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

// Repository interface for Counselor entity, extending MongoRepository to provide CRUD operations
public interface AdminRepository extends MongoRepository<Admin, String> {
    
    // Custom query method to find counselors based on their status
    List<Admin> findByStatus(String status);
}
