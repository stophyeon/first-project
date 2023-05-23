package com.example.firstSpring.DTO;
import com.example.firstSpring.entity.User;
import lombok.*;
import org.intellij.lang.annotations.Pattern;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDate;
@Data
@NoArgsConstructor
public class UserDTO {

    private String userid;
    private String password;
    private String name;
    private String email;

    private String phoneNum;
    private String gender;

    private String birth;


    public UserDTO(User user){ //entity를 dto로 변환
        userid=user.getUserid();
        password=user.getPassword();
        name=user.getName();
        email=user.getEmail();
        phoneNum=user.getPhoneNum();
        gender=user.getGender();
        birth=user.getBirth();

    }
    @Builder// dto를 entity로 변환
    public UserDTO(String userid, String password,String name,String email,String phoneNum,String gender,String birth) {
        this.userid = userid;
        this.password = password;
        this.name=name;
        this.email=email;
        this.phoneNum=phoneNum;
        this.gender=gender;
        this.birth=birth;
    }
    public User toEntity(){
        return User.builder().userid(userid).password(password)
                .email(email).phoneNum(phoneNum).name(name).birth(birth).build();
    }
    public void passwordEncoding(String encodingPassword) {
        this.password = encodingPassword;
    }

}