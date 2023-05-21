package com.example.firstSpring.controller;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

import com.example.firstSpring.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    private final UserService service;


    @Autowired
    public UserController(UserService userService) {
        this.service = userService;
    }
    @GetMapping(value = "login")
    public String login() {
        return "login";
    }



    @GetMapping("/signup")
    public String signupForm() {
        return "signup";
    }

    @PostMapping("/signup")
    public String signup(UserDTO userdto){
        service.insertUser(userdto);
        return "login";
    }

    @PostMapping("/login")
    public String login(UserDTO userdto){

        if (service.login(userdto)){
            return "/index.html";
        }
        else {
            return "/login";
        }
    }
}





