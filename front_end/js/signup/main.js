
/*변수 선언*/


var id = document.querySelector('#id');

var pw1 = document.querySelector('#pswd1');
var pwMsg = document.querySelector('#alertTxt');
var pwImg1 = document.querySelector('#pswd1_img1');

var pw2 = document.querySelector('#pswd2');
var pwImg2 = document.querySelector('#pswd2_img1');
var pwMsgArea = document.querySelector('.int_pass');

var userName = document.querySelector('#name');

var yy = document.querySelector('#yy');
var mm = document.querySelector('#mm');
var dd = document.querySelector('#dd');

var gender = document.querySelector('#gender');

var email = document.querySelector('#email');

var mobile = document.querySelector('#mobile');

var error = document.querySelectorAll('.error_next_box');



/*addEvent*/


id.addEventListener("focusout", checkId);
pw1.addEventListener("focusout", checkPw);
pw2.addEventListener("focusout", comparePw);
userName.addEventListener("focusout", checkName);
yy.addEventListener("focusout", isBirthCompleted);
mm.addEventListener("focusout", isBirthCompleted);
dd.addEventListener("focusout", isBirthCompleted);
gender.addEventListener("focusout", function() {
    if(gender.value === "성별") {
        error[5].style.display = "block";
    } else {
        error[5].style.display = "none";
    }
})
email.addEventListener("focusout", isEmailCorrect);
mobile.addEventListener("focusout", checkPhoneNum);




/*문구들 총 정리*/ 


function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if(id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "5~30자의 영문 소문자, 숫자만 사용 가능합니다."; 
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "조건에 부합하는 아이디입니다.";
        error[0].style.color = "#0000ff";
        error[0].style.display = "block";
    }
}

function checkPw() {
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if(pw1.value === "") {
        error[1].innerHTML = "필수 정보입니다.";
        error[1].style.display = "block";
    } else if(!pwPattern.test(pw1.value)) {
        error[1].innerHTML = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
        pwMsg.innerHTML = "사용불가";
        pwMsgArea.style.paddingRight = "93px";
        error[1].style.display = "block";
        
        pwMsg.style.display = "block";
        pwImg1.src="../signup/images/m_icon_not_use.png";
    } else {
        error[1].style.display = "none";
        pwMsg.innerHTML = "안전";
        pwMsg.style.display = "block";
        pwMsg.style.color = "#5436d6";
        pwImg1.src = "../signup/images/m_icon_safe.png";
    }
}

function comparePw() {
    if(pw2.value === pw1.value && pw2.value != "") {
        pwImg2.src = "../signup/images/m_icon_check_enable.png";
        error[2].style.display = "none";
    } else if(pw2.value !== pw1.value) {
        pwImg2.src = "../signup/images/m_icon_check_disable.png";
        error[2].innerHTML = "비밀번호가 일치하지 않습니다.";
        error[2].style.display = "block";
    } 

    if(pw2.value === "") {
        error[2].innerHTML = "필수 정보입니다.";
        error[2].style.display = "block";
    }
}

function checkName() {
    var namePattern = /[a-zA-Z가-힣]/;
    if(userName.value === "") {
        error[3].innerHTML = "필수 정보입니다.";
        error[3].style.display = "block";
    } else if(!namePattern.test(userName.value) || userName.value.indexOf(" ") > -1) {
        error[3].innerHTML = "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)";
        error[3].style.display = "block";
    } else {
        error[3].style.display = "none";
    }
}


function isBirthCompleted() {
    var yearPattern = /[0-9]{4}/;

    if(!yearPattern.test(yy.value)) {
        error[4].innerHTML = "태어난 년도 4자리를 다시한번 입력하시길 바랍니다.";
        error[4].style.display = "block";
    } else {
        isMonthSelected();
    }


    function isMonthSelected() {
        if(mm.value === "월") {
            error[4].innerHTML = "태어난 월을 선택하시길 바랍니다.";
        } else {
            isDateCompleted();
        }
    }

    function isDateCompleted() {
        if(dd.value === "") {
            error[4].innerHTML = "태어난 일(날짜) 2자리를 다시한번 입력하시길 바랍니다.";
        } else {
            isBirthRight();
        }
    }
}



function isBirthRight() {
    var datePattern = /\d{1,2}/;
    if(!datePattern.test(dd.value) || Number(dd.value)<1 || Number(dd.value)>31) {
        error[4].innerHTML = "생년월일을 다시 확인해주시길 바랍니다";
    } else {
        checkAge();
    }
}

function checkAge() {
    if(Number(yy.value) < 1920) {
        error[4].innerHTML = "출생년도를 다시 한번 확인해주시길 바랍니다";
        error[4].style.display = "block";
    } else if(Number(yy.value) > 2020) {
        error[4].innerHTML = "출생년도를 다시 한번 확인해주시길 바랍니다.";
        error[4].style.display = "block";
    } else {
        error[4].style.display = "none";
    }
}


function isEmailCorrect() {
    var emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;

    if(email.value === ""){ 
        error[6].style.display = "none"; 
    } else if(!emailPattern.test(email.value)) {
        error[6].style.display = "block";
    } else {
        error[6].style.display = "none"; 
    }

}

function checkPhoneNum() {
    var isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;

    if(mobile.value === "") {
        error[7].innerHTML = "필수 정보입니다.";
        error[7].style.display = "block";
    } else if(!isPhoneNum.test(mobile.value)) {
        error[7].innerHTML = "전화번호를 다시 한번 확인해주시길 바랍니다.";
        error[7].style.display = "block";
    } else {
        error[7].style.display = "none";
    }

    
}
