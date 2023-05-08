package com.example.firstSpring.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
//스키마 비밀번호 123456789@
import java.util.Date;
@Table(name = "user")
@Entity(name = "User")//DB와 연결되어있음
@Data //getter,setter,toString 자동생성
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //private key
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "name")
    private String name;
    @Column(name = "email")
    private String email;
    @Column(name = "phoneNum")
    private String phoneNum;
    @Column(name = "gender")
    private String gender;
    @Column(name = "join_date")

    private Date join_date;



}
/*
CREATE TABLE User (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phoneNum VARCHAR(255) NOT NULL,
  gender ENUM('Male', 'Female') NOT NULL,
  join_date DATE NOT NULL
);
 */
