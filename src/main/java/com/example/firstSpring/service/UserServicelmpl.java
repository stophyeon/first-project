package com.example.firstSpring.service;

import com.example.firstSpring.DAO.UserDAO;
import com.example.firstSpring.DAO.UserDAOImpl;
import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServicelmpl implements UserService {


    @Autowired
    UserDAO userdao=new UserDAOImpl();
    @Override
    public void SignUp(UserDTO dto){
        userdao.insertUser(dto);
    }
    @Override
    public boolean login(String userid, String password){

        UserDTO userdto=new UserDTO();
        userdto.setUserid(userid); //JPA가없어서 setter로
        userdto.setPassword(password);
        boolean result=userdao.login(userdto); //login에 result값을 return
        return result;
    }


}