
// var buttons = document.querySelectorAll(".weatherbutton");
// var character = document.getElementById("character"); // 이미지가 추가될 요소

// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     buttons.forEach(function(button) {
//       button.classList.remove("active");
//     });
//     button.classList.add("active");

//     // 이미지가 있는 경우 삭제
//     var img = character.querySelector("img");
//     if (img) {
//       character.removeChild(img);
//     }

//     // 이미지 추가
//     img = document.createElement('img');
//     img.src = 'character1.jpg';
//     img.style.width = "200px";
//     character.appendChild(img);
//   });
// });

// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {

//       buttons.forEach(function(button) {
//         button.classList.remove("active");
//       });
//       button.classList.add("active");
//     });
//   }); //여기까지 날씨부 캐릭터 삽입


const clothesroompageopen = document.getElementById("clothesroompageopen");
const clothesroombutton = document.getElementById("clothesroom-button");

// Add event listener to the button
clothesroompageopen.addEventListener("click", function() {
    // Toggle the visibility of the div
    if (clothesroombutton.style.display === "none") {
        clothesroombutton.style.display = "block";
    } else {
        clothesroombutton.style.display = "none";
    }
});
//옷장 누르면 밑에 옷장 나오게 하는 법

// 로그인 여부 체크하는 js 추가해야함. 나중에 사용자 정보 받아와서 해야할듯?
//function showAlert() {
// if (confirm("로그인 후 사용하시오. 로그인 페이지로 이동하시겠습니까?")) {
//  window.location.href = "../login/login.html";
//}
//}

//아래부터는 옷장 부
let outerpoint, toppoint, bottompoint, etcpoint, personpoint;

document.getElementsByName('outer').forEach(function (element) {
    element.addEventListener('click', function (event) {
        outerpoint = event.target.value;
        document.getElementById('yourouter').value = outerpoint;
    });
});

document.getElementsByName('top').forEach(function (element) {
    element.addEventListener('click', function (event) {
        toppoint = event.target.value;
        document.getElementById('yourtop').value = toppoint;
    });
});

document.getElementsByName('bottom').forEach(function (element) {
    element.addEventListener('click', function (event) {
        bottompoint = event.target.value;
        document.getElementById('yourbottom').value = bottompoint;
    });
}); //상,하,아우터 별 옷 맞추기

document.getElementsByName('etc').forEach(function (element) {
    element.addEventListener('click', function (event) {
        etcpoint = event.target.value;
        document.getElementById('youretc').value = etcpoint;
    });
}); //상,하,아우터 별 옷 맞추기

document.getElementsByName('person').forEach(function (element) {
    element.addEventListener('click', function (event) {
        personpoint = event.target.value;
    });
});
//개인차 받아오기










function checkyourpoint(a) {
    let result = a;

    if (outerpoint == 'pedding') {
        result = result + 12;
    } else if (outerpoint == 'coat') {
        result = result + 7;
    } else if (outerpoint == 'cardigan') {
        result = result + 3;
    }

    // 아우터 종류에 따른 점수 추가

    if (toppoint == 'sweatshirt') {
        result = result + 4;
    } else if (toppoint == 'tshirt' || toppoint == 'shirt') {
        result = result + 1;
    }

    // 상의 종류에 따른 점수 추가

    if (bottompoint == 'pants') {
        result = result + 2;
    } else if (bottompoint == 'shortpants') {
        result = result + 1;
    }

    // 하의 종류에 따른 점수 추가

    if (etcpoint == 'muffler' || etcpoint == 'beanie') {
        result = result + 1;
    }

    // 기타 악세사리 종류에 따른 점수 추가

    if (personpoint == 'hotman') {
        result = result + 4;
    } else if (personpoint == 'coldman') {
        result = result - 4 ;
    } else if (personpoint == 'normalman') {
        result = result ;
    }

    // 날씨에 따른 점수 추가

    return result;
}

var hottestweatherpoint; // 여기엔 api 활용 값을 넣어줘야됨
var coolestweatherpoint;
var averageweatherpoint ;

//위의 변수에 weatherpoint를 버튼 입력에 따라 변경 . 오전 오후 저녁 버전으로

function changeweatherpoint() {
    if(dayweather == 'morning') {
        hottestweatherpoint = 6;
        coolestweatherpoint = -5;
    } else if(dayweather == 'afternoon') {
        hottestweatherpoint = 14;
        coolestweatherpoint = 10;
    } else if(dayweather == 'evening') {
        hottestweatherpoint = 1;
        coolestweatherpoint = -7;
    }
    averageweatherpoint = (hottestweatherpoint + coolestweatherpoint)/ 2;
}
// 오전 오후 저녁에 따라 최고 최저기온 재설정


let hotimg = document.createElement('img');
hotimg.src = '../main/hotimg.jpg';
let coldimg = document.createElement('img')
coldimg.src = '../main/coldimg.jpg'
let goodimg = document.createElement('img')
goodimg.src = '../main/goodimg.jpg'

var character = document.getElementById("character");

function yourlook(yourpoint) {
    if (yourpoint + averageweatherpoint >= 16) {
        console.log("더워");
        character.replaceChild(hotimg, character.firstElementChild);
    } else if (yourpoint + averageweatherpoint <= 9) {
        console.log('추워');
        character.replaceChild(coldimg, character.firstElementChild);
    } else if (yourpoint + averageweatherpoint > 9 && yourpoint + averageweatherpoint < 16) {
        console.log('굳');
        character.replaceChild(goodimg, character.firstElementChild);
    }


}; //실제 활동시는 그림 구현


document.getElementById('submitbutton').addEventListener('click', function(event) {
    var yourpoint = 0; // 추운지 더운지에 따라서 내 포인트 변경
    changeweatherpoint() ;
    yourpoint = checkyourpoint(yourpoint);
    yourlook(yourpoint);
    console.log(averageweatherpoint)
    console.log(yourpoint + averageweatherpoint ) ;
    console.log(yourpoint);

}); //버튼 클릭시 보이는 모습 설정

function togglemenu() {
    document.getElementById('sidebar1').classList.toggle('active');
}

document.getElementsByName('day').forEach(function (element) {
    element.addEventListener('click', function (event) {
        dayweather = event.target.value;
        console.log(dayweather);
        changeweatherpoint();
        console.log(averageweatherpoint);
        console.log(personpoint) ;
        console.log(yourpoint);
    });
}); //오전오후저녁변수

//일단 온도 const값으로 박음
// 온도에 따른 옷 변경 / 완료
// 캐릭터 나오기 -> 지금 사진이 깨지는 문제 발생
// 본인 온도 부 추가 해야됨 .


// 문제점 - > 점심 처럼 20도일때, 더우니까 옷을 가볍게 입으면, 추워함 . 옷을 엄청껴입으면 , 더워함
// 해결
// 성규꺼 사라짐

// 깃 설정 어디갔냐
// again test