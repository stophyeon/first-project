package com.example.firstSpring.service;



import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.Repository.UserRepository;
import com.example.firstSpring.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@RequiredArgsConstructor
@Service
public class UserServicelmpl implements UserService {
    @Autowired
    private final UserRepository userDAO;
    @Override
    public String insertUser(UserDTO userdto){
        User newuser = User.builder().email(userdto.getEmail()).name(userdto.getName())
                .password(userdto.getPassword()).userid(userdto.getUserid()).gender(userdto.getGender())
                .phoneNum(userdto.getPhoneNum()).birth(userdto.getBirth()).build();
        return userDAO.save(newuser).getUserid();
    }

    @Override
    public boolean login(UserDTO userdto) {
        User userid= userDAO.findByUserid(userdto.getUserid());
        User password=userDAO.findByPassword(userid);
        if (password != null && password.equals(userdto.getPassword())) {
            return true;
        } else {
            return false;
        }
    }





}