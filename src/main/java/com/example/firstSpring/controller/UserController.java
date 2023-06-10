package com.example.firstSpring.controller;

import com.example.firstSpring.DTO.UserDTO;
import com.example.firstSpring.entity.User;

import com.example.firstSpring.service.UserService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {
    @Autowired
    private final UserService service;


    @Autowired
    public UserController(UserService userService) {
        this.service = userService;
    }
    @GetMapping("/login")
    public String loginForm() {

        return "login";
    }

    @GetMapping(value = "logout")
    public String logout() {
        return "index";
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
    public String login(@ModelAttribute @Validated UserDTO userdto, BindingResult bindingResult,
                        HttpServletRequest request){

        if (bindingResult.hasErrors()) {
            return "login";
        }
        boolean loginUser = service.login(userdto);
        if (loginUser == false) {
            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
            return "login";
        }

        HttpSession session = request.getSession();
        session.setAttribute("id",userdto.getUserid());
        return"mypage";


    }
}




