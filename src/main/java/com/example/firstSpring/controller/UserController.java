package com.example.firstSpring.controller;
import com.example.firstSpring.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class UserController {
    @Autowired
    UserService userService;
    public void user(){

    }


}
