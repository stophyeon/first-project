package com.example.firstSpring.DAO;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;
import org.springframework.stereotype.Repository;


public interface UserDAO {
    //public User loginCheck(String username);
    public boolean insertUser(UserDTO dto);
    public boolean login(UserDTO userDto);
}
