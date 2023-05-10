package com.example.firstSpring.controller;
import com.example.firstSpring.DTO.UserDto;
import com.example.firstSpring.entity.User;
import com.example.firstSpring.repository.UserRepository;
import com.example.firstSpring.service.UserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class UserController {
    @Autowired
    private UserService userService;
    private UserRepository userRepository;


    @PostMapping(value = "/login")//url이 같으므로 login에서 보낸 username과 password가 자동생성
    public String login(UserDto dto, HttpSession session){

        boolean loginService= userService.login(dto); //serService.login 에서 return한 true or flase를 받음
        if (loginService) { //가져온 password가 입력받은 password와 일치하면
            session.setAttribute("login", dto.getUsername()); //login session에 저장 입력받은 username으로(id)
            return "redirect:/main";
        } else {
            return "redirect:/login";
        }
    }
    @PostMapping("user/new")
    public String signup(@ModelAttribute UserDto user){
        userService.register(user);
        return "redirect:/";
    }
}
