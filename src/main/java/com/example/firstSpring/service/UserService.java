package com.example.firstSpring.service;


import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

public interface UserService {
    String insertUser(UserDTO userdto);
    boolean login(UserDTO userDto); //컨트롤러에서 getter로 입력받음

}

