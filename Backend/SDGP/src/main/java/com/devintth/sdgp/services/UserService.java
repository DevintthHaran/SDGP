package com.devintth.sdgp.services;

import com.devintth.sdgp.model.User;
import com.devintth.sdgp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User signUp(User user) {
        if (userRepository.findByUserEmailId(user.getUserEmailId()) != null) {
            throw new RuntimeException("Email already exists");
        }
        return userRepository.save(user);
    }

    public boolean signIn(String userEmailId, String userPassword) {
        System.out.println("Email: " + userEmailId + ", Password: " + userPassword);
        User user = userRepository.findByUserEmailIdAndUserPassword(userEmailId, userPassword);
        System.out.println(user);
        if (user != null) {
            return true;
        }

        return false;
    }

}

