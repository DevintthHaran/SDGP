package com.devintth.sdgp.repository;


import com.devintth.sdgp.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    User findByUserEmailId(String userEmailId);

    User findByUserEmailIdAndUserPassword(String userEmailId, String userPassword);
}
