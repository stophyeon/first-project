package com.example.firstSpring.DTO;
import lombok.*;

import java.util.Date;
@Getter
@Setter
@AllArgsConstructor
@ToString
@Data
public class UserDto {

    private Long userid;
    private String passwd;
    private String name;
    private String email;
    private String phoneNum;
    private Date join_date;


}