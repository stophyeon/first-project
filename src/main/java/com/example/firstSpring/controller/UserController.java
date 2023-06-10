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
    @GetMapping("/")
    public String indexPage(){
        return  "index";
    }

    @GetMapping("/login")
    public String loginForm() {

        return "login";
    }
    //@GetMapping(value = "logout")
    @GetMapping("/logout")
    public String logout() {
        return "index";
    } //로그아웃

    @GetMapping("/signup")
    public String signupForm() {
        return "signup";
    }

    @PostMapping("/signup")
    public String signup(@Validated UserDTO userdto, BindingResult bindingResult,HttpServletRequest request){
        if(bindingResult.hasErrors())

        {
            request.setAttribute("org.springframework.validation.BindingResult.member", bindingResult);
            return "signup";
        }
        if(service.exitingUserid(userdto.getUserid())) //아이디 중복존재
        {
            request.setAttribute("errorMessage" , "이미 사용중인 아이디입니다.");
            return "signup";

        }
        service.insertUser(userdto);
        return "login";
    }

    @PostMapping("/login")
    public String login(@ModelAttribute @Validated UserDTO userdto, BindingResult bindingResult,
                        HttpServletRequest request){
/*
        if (bindingResult.hasErrors()) {
            System.out.println("로그인오류");
            return "login";
        }

 */
        boolean loginUser = service.login(userdto);

        if (loginUser == false) {
            return "login";
        }

        HttpSession session = request.getSession();
        session.setAttribute("id",userdto.getUserid());
        return"mypage";
    }


}




