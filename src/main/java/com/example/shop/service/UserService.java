package com.example.shop.service;

import com.example.shop.model.User;
import com.example.shop.repo.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    public boolean checkLogin(User user) {
        user = userRepository.findByEmailAndPassword(user.getEmail(),user.getPassword());
        return user != null;
    }

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {

        return userRepository.save(user);
    }
}

