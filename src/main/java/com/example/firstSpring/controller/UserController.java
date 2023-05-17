package com.example.firstSpring.controller;
import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

import com.example.firstSpring.service.UserService;
import com.example.firstSpring.service.UserServicelmpl;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class UserController {
    private final UserService service;

    @Autowired
    public UserController(UserService userService) {
        this.service = userService;
    }
    @GetMapping(value = "login")
    public String login() {
        return "login";
    }
    @PostMapping("/login")
    public String login(@RequestParam("userid")String userid,@RequestParam("password")String password){

        if (service.login(userid,password)){
            return "redirect:/home";
        }
        else {

            return "redirect:/login";
        }
    }

    @GetMapping("/signup")
    public String signup(UserDTO userdto) {
        try {
            service.SignUp(userdto);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "signup";
    }

}





