package com.example.firstSpring.service;

import com.example.firstSpring.DTO.UserDto;
import com.example.firstSpring.entity.User;
import com.example.firstSpring.repository.UserRepository;
import org.springframework.stereotype.Service;
import com.example.firstSpring.dao.UserDao;
@Service
public class UserService implements UserServiceInterfae {

    UserDao userDAO;


    @Override
    public boolean login(UserDto dto) {
        User user = userDAO.loginCheck(dto.getUsername());//loginCheck return type이 user
        if (user != null && user.getPassword().equals(dto.getPassword())) //user(db)에서 가져온 password와 입력받은 password가 같으면
            return true; //true를 반환
        else
            return false;

    }
}
