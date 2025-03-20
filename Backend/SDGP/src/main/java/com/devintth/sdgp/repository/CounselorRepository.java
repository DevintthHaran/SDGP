package com.devintth.sdgp.repository;
import com.devintth.sdgp.model.Counselor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CounselorRepository extends MongoRepository<Counselor, String> {
    List<CounselorProjection> findByPositionAndStatus(String position, String status);
}


