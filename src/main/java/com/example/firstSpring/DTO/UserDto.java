package com.example.firstSpring.DTO;
import lombok.*;

import java.util.Date;
@AllArgsConstructor
@Data
@Getter
@Setter
public class UserDto {

    private  String username;//단순히 입력받은 아이디를 가져오는 거면 Stirng형태에 username이 낫겠다싶어서 바꿨습니다.
    //private Long userid;
    private String password; //passwd -> password로 바꿨어요
    private String name;
    private String email;
    private String phoneNum;
    private Date join_date;



    public UserDto(String username, String password) {
        this.username = username;
        this.password = password;
    }

}