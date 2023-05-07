package com.example.firstSpring.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity //DB와 연결되어있음
@Data //getter,setter,toString 자동생성
public class User {

    @Id
    private Long id; //private key

    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNum;
    private Date join_date;



}
