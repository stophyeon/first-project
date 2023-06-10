package com.example.firstSpring.DTO;
import com.example.firstSpring.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.validation.annotation.Validated;

import java.time.LocalDate;
@Data
@NoArgsConstructor
public class UserDTO {
    @NotBlank(message ="아이디를 입력해주세요")
    private String userid;
    @NotBlank(message = "비밀번호를 입력해주세요")
    private String password;
    @NotBlank(message = "이름을 입력하세요")
    private String name;
    @NotBlank(message = "이메일은 필수입니다.")
    @Email(message = "이메일 형식이 잘못되었습니다.")
    private String email;

    /*
    숫자 2자리 (01)로 시작하고
    3~4자리의 숫자로 이루어진 그룹이 따라오고
    마지막으로 4자리의 숫자로 끝나는 문자열
    즉, 이 정규식은 일반적인 한국의 휴대폰 번호 형식을 나타냅니다.
    예를 들면 010-1234-5678과 같은 번호가 이 정규식과 일치합니다
     */
    @Pattern(regexp = "(01[016789])(\\d{3,4})(\\d{4})", message = "올바른 휴대폰 번호를 입력해주세요.")
    private String phoneNum;
    private String gender;
    @NotBlank(message = "생년월일 입력은 필수입니다.")
    @Pattern(regexp = "\\d{8}", message = "생년월일 입력이 잘못되었습니다.")
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