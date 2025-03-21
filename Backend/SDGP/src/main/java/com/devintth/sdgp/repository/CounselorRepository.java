package com.devintth.sdgp.repository;

import com.devintth.sdgp.model.Counselor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CounselorRepository extends MongoRepository<Counselor, String> {
}
