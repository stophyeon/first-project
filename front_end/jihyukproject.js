//추가부 - > 3가지 옷 다 넣기 
// 아직 코드 간소화 못했음


let outerpoint, toppoint, bottompoint ;

var outers = document.getElementsByName('outer');
var tops = document.getElementsByName('top');
var bottoms = document.getElementsByName('bottom');

function getouterpoint(event) {
  outerpoint = event.target.value;
} // radio에 따른 outerpoint.
function gettoppoint(event) {
  toppoint = event.target.value;
} 
function getbottompoint(event) {
  bottompoint = event.target.value;
} 

for (i = 0; i < outers.length; i++) {
  outers[i].addEventListener('click', getouterpoint);
} //상세 구현부

for (i = 0; i < tops.length; i++) {
  tops[i].addEventListener('click', gettoppoint);
} //상세 구현부

for (i = 0; i < bottoms.length; i++) {
  bottoms[i].addEventListener('click', getbottompoint);
} //상세 구현부

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

