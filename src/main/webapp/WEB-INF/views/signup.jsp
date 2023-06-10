<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
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
                <form action="/signup" method="post" id="content">
                    <fieldset>
                        <legend class = "skip">회원가입 양식</legend>
                <!-- 아이디 생성란(wheatherla 아이디로 ㅇㅇ) -->
                <div>
                    <h3 class="join_title">
                        <label for="id">아이디</label>
                    </h3>
                    <span class="box int_id">
                        <input type="text" id="id" class="int" name="userid" maxlength="20">
                        <span class="step_url">@weatherla.com</span>
                    </span>
                    <span class="error_next_box"></span>
                </div>

                <!-- 비밀 번호 입력란(초기) -->
                <div>
                    <h3 class="join_title"><label for="pswd1">비밀번호</label></h3>
                    <span class="box int_pass">
                        <input type="text" id="pswd1" class="int" name="password" maxlength="30">
                        <span id="alertTxt">사용불가</span>

                        <img src="/img/m_icon_pass.png" id="pswd1_img1" class="pswdImg">

                    </span>
                    <span class="error_next_box"></span>
                </div>

                <!-- 비밀번호 재확인 란 -->
                <div>
                    <h3 class="join_title"><label for="pswd2">비밀번호 재확인</label></h3>
                    <span class="box int_pass_check">
                        <input type="text" id="pswd2" class="int" maxlength="20">

                        <img src="/img/m_icon_check_disable.png" id="pswd2_img1" class="pswdImg">

                    </span>
                    <span class="error_next_box"></span>
                </div>

                <!-- 이름 칸 -->
                <div>
                    <h3 class="join_title"><label for="name">이름</label></h3>
                    <span class="box int_name">
                        <input type="text" id="name" class="int" name="name" maxlength="20">
                    </span>
                    <span class="error_next_box"></span>
                </div>

                <!-- 생년월일 칸 -->
                <div>
                    <h3 class="join_title"><label for="yyyymmdd">생년월일</label></h3>

                    <div id="bir_wrap">
                        <!-- 생년 -->
                        <div id="bir_yy">
                            <span class="box">
                                <input type="text" id="yyyymmdd" class="int"name="birth" maxlength="10" placeholder="ex)19990531">
                            </span>
                        </div>

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
                    <span class="error_next_box">이메일 주소를 다시 한번 확인해주시길 바랍니다.</span>    
                </div>

                <!-- 전화번호 입력 란 -->
                <div>
                    <h3 class="join_title"><label for="mobile">전화번호</label></h3>
                    <span class="box int_mobile">
                        <input type="tel" id="mobile" class="int" name="phoneNum" maxlength="16" placeholder="전화번호 입력">
                    </span>
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
