package com.example.firstSpring.service;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

public interface UserService {
    boolean login(UserDTO dto);
    void SignUp(UserDTO dto);



    }

