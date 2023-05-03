package com.weatheria.member.dao;

import com.example.firstSpring.DTO.UserDto;


public interface UserDao {
    public String loginCheck(UserDto dto);
}