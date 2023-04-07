
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



//아래부터는 옷장 부 
let outerpoint, toppoint, bottompoint, etcpoint, dayweather;

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
//여기까지 값 넣고 뭐 입었는지 뜨기 








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

  /*if (dayweather == 'iamcold') {
    result = result + 3;
  } else if (dayweather == 'iamhot') {
    result = result - 3;
  }
  */

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
    hottestweatherpoint = 15;  
    coolestweatherpoint = 12;
  } else if(dayweather == 'evening') {
    hottestweatherpoint = -5;  
    coolestweatherpoint = -15;
  }
  averageweatherpoint = (hottestweatherpoint + coolestweatherpoint)/ 2;
}
 // 오전 오후 저녁에 따라 최고 최저기온 재설정

var hotimg = document.createElement('img');
hotimg.src = '../../html/main/hotimg.jpg'; // 이미지 파일 경로
document.getElementById("character").appendChild(hotimg);

function yourlook(yourpoint) {

if (yourpoint + averageweatherpoint > 17) {
  console.log("더워");
  document.getElementById("character").appendChild(hotimg); //현재 오류 
} else if (yourpoint + averageweatherpoint < 7) {
  console.log('추워');
} else if (yourpoint + averageweatherpoint >= 7 && yourpoint + averageweatherpoint <= 17) {
  console.log('굳');
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




document.getElementsByName('day').forEach(function (element) {
  element.addEventListener('click', function (event) {
  dayweather = event.target.value;
  console.log(dayweather);
  changeweatherpoint();
  console.log(averageweatherpoint);
  });
  }); //오전오후저녁변수

  //일단 온도 const값으로 박음
const morningTemperature = 15;  // 오전 
const afternoonTemperature = 20;  // 오후 
const nightTemperature = 10;  // 저녁 

// 버튼 클릭하면 뿌슝빠슝
const morningButton = document.getElementById("morning");
const afternoonButton = document.getElementById("afternoon");
const nightButton = document.getElementById("night");

// 온도 표시
const temperatureDisplay = document.getElementById("temperature");

// 버튼 클릭하면 아침, 점심, 저녁 온도 나오게 하기
morningButton.addEventListener("click", () => {
  temperatureDisplay.textContent = `${morningTemperature}도`;
});

afternoonButton.addEventListener("click", () => {
  temperatureDisplay.textContent = `${afternoonTemperature}도`;
});

nightButton.addEventListener("click", () => {
  temperatureDisplay.textContent = `${nightTemperature}도`;
}); 

// 옷 입은거 화면에 띄우기 / 완료 
// 온도에 따른 옷 변경 / 완료
// 캐릭터 나오기 -> 지금 사진이 깨지는 문제 발생
// 본인 온도 부 추가 해야됨 . 

 
// 문제점 - > 점심 처럼 20도일때, 더우니까 옷을 가볍게 입으면, 추워함 . 옷을 엄청껴입으면 , 더워함
// 해결  
// 성규꺼 사라짐