
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html lnag="ko">
    <head>
        <meta charset="UTF-8">
        <title>WeaTherla : 회원가입</title>
        <link rel="stylesheet" href="/css/signup/new_main.css">
        
    </head>
    
    <body>
        <div id="header">

            <a href="/" target="_blank" title="WeaTherla 회원 가입 페이지"><img src="/img/m_logo_image.png" width="800" height="300" id="logo"></a>

        </div>

        <div id= "wrapper">
            <main>
                <form action="/signup" method="post" id="content" >
                    <fieldset>
                        <legend class = "skip">회원가입 양식</legend>
                <!-- 아이디 생성란(wheatherla 아이디로 ㅇㅇ) -->
                <div>
                    <h3 class="join_title">
                        <label for="id">아이디</label>
                    </h3>
                    <span class="box int_id">
                        <input type="text" id="id" class="int" name="userid" maxlength="20">
                    </span>
                    <div class="error">${errorMessage}</div>
                    <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                        org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                        if (bindingResult.hasFieldErrors("userid")) {
                            java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("userid");
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                    %>
                    <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                }
                            }
                        }
                    %>
                </div>

                <!-- 비밀 번호 입력란(초기) -->
                <div>
                    <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
                    <span class="box int_pass">
                        <input type="text" id="pswd1" class="int" name="password" maxlength="30">
                        <span id="alertTxt">사용불가</span>

                        <img src="/static/img/m_icon_pass.png" id="pswd1_img1" class="pswdImg">

                    </span>
                    <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                        org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                        if (bindingResult.hasFieldErrors("password")) {
                            java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("password");
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                    %>
                    <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                }
                            }
                        }
                    %>
                    <span class="error_next_box"></span>
                </div>
                <!-- 이름 칸 -->
                <div>
                    <h3 class="join_title"><label for="name">이름</label></h3>
                    <span class="box int_name">
                        <input type="text" id="name" class="int" name="name" maxlength="20">
                    </span>
                    <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                        org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                        if (bindingResult.hasFieldErrors("name")) {
                            java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("name");
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                    %>
                    <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                }
                            }
                        }
                    %>
                    <span class="error_next_box"></span>
                </div>



                <!-- 생년월일 칸 -->
                <div>
                    <h3 class="join_title"><label for="yyyymmdd">생년월일</label></h3>

                    <div id="bir_wrap">
                        <!-- 생년 -->
                        <div id="bir_yy">
                            <span class="box">
                                <input type="text" id="yyyymmdd" name="birth" class="int" maxlength="10" placeholder="ex)19990531">
                            </span>
                        </div>
                        <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                            org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                            if (bindingResult.hasFieldErrors("birth")) {
                                java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("birth");
                                boolean hasNotBlankError = false; // NotBlank 오류 여부를 나타내는 변수
                                for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                                    if (fieldError.getCode().equals("NotBlank")) {
                                        hasNotBlankError = true; // NotBlank 오류가 발견되었음을 표시
                        %>
                        <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                        <%
                                    break; // 오류 메시지 출력 후 루프 종료
                                }
                            }
                            if (!hasNotBlankError) { // NotBlank 오류가 발견되지 않은 경우에만 Pattern 오류 메시지 출력
                                for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                                    if (fieldError.getCode().equals("Pattern")) {
                        %>
                        <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                        <%
                                                break; // 오류 메시지 출력 후 루프 종료
                                            }
                                        }
                                    }
                                }
                            }
                        %>



                    </div>
                    <span class="error_next_box"></span>    
                </div>

                <!-- 성별 -->
                <div>
                    <h3 class="join_title"><label for="gender">성별</label></h3>
                    <span class="box gender_code">
                        <select id="gender" name="gender" class="sel">
                            <option>성별</option>
                            <option value="M">남자</option>
                            <option value="F">여자</option>
                        </select>                            
                    </span>
                    <span class="error_next_box">필수 정보입니다.</span>
                </div>

                <!-- 본인 인증 이메일 -->
                <div>
                    <h3 class="join_title"><label for="email">본인인증 이메일<span class="optional">(필수)</span></label></h3>
                    <span class="box int_email">
                        <input type="text" id="email" class="int" name="email" maxlength="100" placeholder="선택입력">
                    </span>
                    <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                        org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                        if (bindingResult.hasFieldErrors("email")) {
                            java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("email");
                            boolean hasNotBlankError = false; // NotBlank 오류 여부를 나타내는 변수
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                                if (fieldError.getCode().equals("NotBlank")) {
                                    hasNotBlankError = true; // NotBlank 오류가 발견되었음을 표시
                    %>
                    <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                break; // 오류 메시지 출력 후 루프 종료
                            }
                        }
                        if (!hasNotBlankError) { // NotBlank 오류가 발견되지 않은 경우에만 Email 오류 메시지 출력
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                                if (fieldError.getCode().equals("Email")) {
                    %>
                            <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                            break; // 오류 메시지 출력 후 루프 종료
                                        }
                                    }
                                }
                            }
                        }
                    %>

                    <span class="error_next_box"></span>
                </div>

                <!-- 전화번호 입력 란 -->
                <div>
                    <h3 class="join_title"><label for="mobile">전화번호</label></h3>
                    <span class="box int_mobile">
                        <input type="tel" id="mobile" class="int" name="phoneNum" maxlength="16" placeholder="전화번호 입력">
                    </span>
                    <% if (request.getAttribute("org.springframework.validation.BindingResult.member") != null) {
                        org.springframework.validation.BindingResult bindingResult = (org.springframework.validation.BindingResult) request.getAttribute("org.springframework.validation.BindingResult.member");
                        if (bindingResult.hasFieldErrors("phoneNum")) {
                            java.util.List<org.springframework.validation.FieldError> fieldErrors = bindingResult.getFieldErrors("phoneNum");
                            for (org.springframework.validation.FieldError fieldError : fieldErrors) {
                    %>
                    <span class="error-message"><%=fieldError.getDefaultMessage() %></span>
                    <%
                                }
                            }
                        }
                    %>
                    <span class="error_next_box"></span>    
                </div>
                <!-- 개인차 만들기 시도 -->
                <div class="personTemper1">
                    <h3 class="join_title"><label >개인차</label></h3>
                        <label>
                          <input type="radio" name="personTemper" value="colder">
                          추위를 많이 타요!
                        </label>
                        <label>
                          <input type="radio" name="personTemper" value="hotter">
                          더위를 많이 타요!
                        </label>
                        <label>
                          <input type="radio" name="personTemper" value="goodd">
                          평범해요!
                        </label>
                      </div>
                


                <!-- 최종 가입 하기 버튼-->
                <div class="btn_area">

                    <button class="join_link" id="btnJoin" onclick="location.href='/login'">최종가입완료</button>

                </div>
                
                
            </fieldset>
        </form>
             
            <!-- content-->
            </main>
        </div> 
        <!-- wrapper -->

    <script src="/js/signup/main.js"></script>
    </body>

    <footer>
        &copy; WeaTherla Corp. All rights reserved.
    </footer>

</html>
