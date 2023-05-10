package com.example.firstSpring.service;

import com.example.firstSpring.DAO.UserDAO;
import com.example.firstSpring.DTO.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServicelmpl implements UserService {


    @Autowired
    UserDAO userdao;
    @Override
    public void SignUp(UserDTO dto){
        userdao.insertUser(dto);
    }
    @Override
    public boolean login(UserDTO dto){
        return true;//내일 이어서
    }


}