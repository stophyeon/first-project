package com.example.firstSpring.controller;
import com.example.firstSpring.entity.User;
import com.example.firstSpring.repository.UserRepository;
import com.example.firstSpring.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class UserController {
    @Autowired
    private UserService userService;
    private UserRepository userRepository;
    @PostMapping(value = "/login")
    public String login(@RequestParam String username, @RequestParam String password, HttpSession session){

        User user = userService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            session.setAttribute("login", login);
            return "redirect:/main";
        } else {
            return "redirect:/login";
        }

    }




}
