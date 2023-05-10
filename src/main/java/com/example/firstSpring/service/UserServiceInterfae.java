package com.example.firstSpring.service;

import com.example.firstSpring.DTO.UserDto;
import com.example.firstSpring.entity.User;

public interface UserServiceInterfae {
    boolean login(UserDto dto);

        Long register(UserDto dto);

        default User dtoToEntity(UserDto dto) {
            User entity = dto.toEntity();
            return entity;


        }
    }

