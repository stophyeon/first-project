package com.example.firstSpring.dao;

import com.example.firstSpring.DTO.UserDto;
import com.example.firstSpring.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
@Repository
public interface UserDao {
    public User loginCheck(String username);


}