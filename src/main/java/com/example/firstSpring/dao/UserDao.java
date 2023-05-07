package com.example.firstSpring.dao;

import com.example.firstSpring.DTO.UserDto;
import com.example.firstSpring.entity.User;


public interface UserDao {
    public User loginCheck(String username);

}