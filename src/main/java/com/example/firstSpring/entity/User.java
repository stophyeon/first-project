package com.example.firstSpring.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.relational.core.mapping.Column;

import java.time.LocalDate;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@Entity
@Table(name = "member")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private String userid;
    private String password;
    private String name;
    private String email;
    private String phoneNum;
    private String gender;
    private String birth;
    @Builder
    public User(String password, String name, String email, String phoneNum, String userid,String gender,String birth) {
        this.userid = userid;
        this.password = password;
        this.name = name;
        this.email = email;
        this.phoneNum = phoneNum;
        this.gender=gender;
        this.birth = birth;
    }
    //setter 대신 만든 메소드
    public void UserUpdate(String password, String email, String phoneNumber) {
        this.password = password;
        this.email = email;
        this.phoneNum = phoneNumber;
    }

}





