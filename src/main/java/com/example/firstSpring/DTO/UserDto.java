package com.example.firstSpring.DTO;
import com.example.firstSpring.entity.User;
import lombok.*;

@Data
@NoArgsConstructor
public class UserDto {

    private String username;
    private String password;
    private String name;
    private String email;
    private String phoneNum;
    private String gender;
    private String birthYear;
    private Integer birthMonth;
    private String birthDay;


    @Builder
    public UserDto(String username, String password) {
        this.username = username;
        this.password = password;

    }
    public User toEntity(){
        return User.builder().username(username).password(password)
                .email(email).phoneNum(phoneNum).name(name).build();
    }


}