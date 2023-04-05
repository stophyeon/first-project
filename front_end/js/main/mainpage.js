var buttons = document.querySelectorAll(".weatherbutton");
var character = document.getElementById("character"); // 이미지가 추가될 요소

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });
    button.classList.add("active");

    // 이미지가 있는 경우 삭제
    var img = character.querySelector("img");
    if (img) {
      character.removeChild(img);
    }

    // 이미지 추가
    img = document.createElement('img');
    img.src = 'character1.jpg';
    img.style.width = "200px";
    character.appendChild(img);
  });
});

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
     
      buttons.forEach(function(button) {
        button.classList.remove("active");
      });
      button.classList.add("active");
    });
  }); //여기까지 날씨부 캐릭터 삽입


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
let outerpoint, toppoint, bottompoint, dayweather;

document.getElementsByName('outer').forEach(function (element) {
element.addEventListener('click', function (event) {
outerpoint = event.target.value;
});
});

document.getElementsByName('top').forEach(function (element) {
element.addEventListener('click', function (event) {
toppoint = event.target.value;
});
}); 

document.getElementsByName('bottom').forEach(function (element) {
element.addEventListener('click', function (event) {
bottompoint = event.target.value;
});
}); //상,하,아우터 별 옷 맞추기 

document.getElementsByName('day').forEach(function (element) {
element.addEventListener('click', function (event) {
dayweather = event.target.value;
});
}); //오전오후저녁변수

function checkyourpoint(a) {
  if (outerpoint == 'pedding') {
    a = a + 15;
  } else if (outerpoint == 'coat') {
    a = a + 7;
  } else if (outerpoint == 'cardigan') {
    a = a + 3;
  }

  if (toppoint == 'sweatshirt') {
    a = a + 4;
  } else if (toppoint == 'tshirt') {
    a = a + 1;
  }

  if (bottompoint == 'pants') {
    a = a + 2;
  } else if (bottompoint == 'shortpants') {
    a = a + 1;
  }
  // 체크에 따른 내 포인트

  if (dayweather = 'iamcold')
  {
    a = a + 3 
  }
  else if (dayweather = 'iamhot')
  {
    a = a - 3 
  }
  else if (dayweather = 'soso')
  {
    a = 0; 
  } //추위를 타는지 아닌지에 대한 부  . iam cold,hot , soso는 임의 이름 //너의 포인트 셋

  return a;
}; 

var hottestweatherpoint = 11; // 여기엔 api 활용 값을 넣어줘야됨 
var coolestweatherpoint = 3;

//위의 변수에 weatherpoint를 버튼 입력에 따라 변경 . 오전 오후 저녁 버전으로 

function changeweatherpoint()
{
  if(dayweather == 'morning')
  {
    hottestweatherpoint = 6;  
    coolestweatherpoint = -5 ;
  }
  if(dayweather == 'afternoon')
  {
    hottestweatherpoint = 20;  
    coolestweatherpoint = 16 ;
  }
  if(dayweather == 'evening')
  {
    hottestweatherpoint = -3;  
    coolestweatherpoint = -15 ;
  }
  
} // 오전 오후 저녁에 따라 최고 최저기온 재설정

function yourlook(yourpoint) {
  if (yourpoint >= hottestweatherpoint) {
    console.log('더워');
  } else if (yourpoint <= coolestweatherpoint) {
    console.log('추워');
  } else if (yourpoint > coolestweatherpoint && yourpoint < hottestweatherpoint) {
    console.log('굳');
  } 
}; //실제 활동시는 그림 구현


document.getElementById('submitbutton').addEventListener('click', function(event) {
  var yourpoint = 0; // 추운지 더운지에 따라서 내 포인트 변경 
  changeweatherpoint() ;
  yourpoint = checkyourpoint(yourpoint);
  yourlook(yourpoint);
  console.log(yourpoint) ;
}); //버튼 클릭시 보이는 모습 설정 
