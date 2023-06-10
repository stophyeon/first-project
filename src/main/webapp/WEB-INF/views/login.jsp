<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<html lang="ko" xmlns:th="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale-1.0">
    <title>WeaTherla</title>
    <link rel="stylesheet" href="/css/login/reset.css">
    <link rel="stylesheet" href="/css/login/style.css">
    <script src="/js/login/script.js"></script>
<head>
<body>
    <h1><a href="/"><img src="/img/logo_images.png" alt="WeaTherla"></a></h1>
    <main>
        <form action="/login" method="post" id="loginFrm">
            <fieldset>
                <legend class = "skip">로그인양식</legend>
                <ul>
                    <li>
                        <span class="id_bg"><!-- 배경이미지(메일아이디)--></span>
                        <span><input type="text" name="userid" placeholder="아이디"></span>


                    </li>
                    <li class="error id_error">아이디(이메일)을 입력해주세요.</li>
                    <li>
                        <span class="pw_bg"><!-- 배경이미지(비밀번호)--></span>
                        <span><input type="password" name="password" placeholder="비밀번호"></span>
                        <span class="pw_show_hide" title="문자보이기"></span>
                    </li>
                    <li class="error pw_error">비밀번호를 입력해주세요</li>
                </ul>
                <div class="btm">
                    <p>
                        <label><!--자동로그인 체크박스(글자를 눌러도 활성화 하기위해 label 태그)-->
                            <input type="checkbox" name="login_y" id="login_y">
                            <span>자동로그인</span>
                        </label>
                    </p>
                </div>
                <!--로그인 버튼-->
                <button type="submit" id="login_btn">로그인</button>
            </fieldset>
        </form>
        <!--회원가입은 input에 상관없이 다른 link로 이동함-->
        <a href="signup" class="join_link">회원가입</a>
    </main>
    <footer>
        &copy; WeaTherla Corp. All rights reserved.
    </footer>


</body>    
</html>
