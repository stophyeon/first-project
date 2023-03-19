//시계
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}

setInterval(clock, 1000); //1초

//지혁이 옷
let outerpoint, toppoint, bottompoint;

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
});

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


  return a;
}; //옷별로 내 포인트 획득 부 

var hottestweatherpoint = 11; // 여기엔 api 활용 값을 넣어줘야됨 
var coolestweatherpoint = 3;

function yourlook(yourpoint) {
  if (yourpoint >= hottestweatherpoint) {
    console.log('더워');
  } else if (yourpoint <= coolestweatherpoint) {
    console.log('추워');
  } else if (yourpoint > coolestweatherpoint && yourpoint < hottestweatherpoint) {
    console.log('굳');
  } 
}; //실제 활동시는 그림 구현

document.getElementById('button').addEventListener('click', function(event) {
  var yourpoint = 0;
  yourpoint = checkyourpoint(yourpoint);
  yourlook(yourpoint);
  console.log(yourpoint) ;
}); //버튼 클릭시 보이는 모습 설정 

function showImage() {
    var image = document.getElementById("myImage");
    image.style.display = "block";
  }