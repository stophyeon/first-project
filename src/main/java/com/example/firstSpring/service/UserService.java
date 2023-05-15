package com.example.firstSpring.service;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

public interface UserService {
    boolean login(String userid, String password); //컨트롤러에서 getter로 입력받음
    void SignUp(UserDTO dto);



    }

