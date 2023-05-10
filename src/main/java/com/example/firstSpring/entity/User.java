package com.example.firstSpring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
public class User {



    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNum;
    private String gender;
    private String birthYear;
    private Integer birthMonth;
    private String birthDay;




}
