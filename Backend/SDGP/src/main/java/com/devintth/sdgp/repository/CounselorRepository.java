package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.Counselor;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CounselorRepository extends MongoRepository<Counselor, String> {
    List<Counselor> findByStatus(String status);
}
