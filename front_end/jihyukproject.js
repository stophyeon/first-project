// 버튼을 누르면, 여태까지 넣었던 애들 합쳐서 계산
// 계산 후에 그거에 따라 점수 획득
// 받아온 최고 최저에 따라서 계산 
let outerpoint;

var outers = document.getElementsByName('outer');

function getouterpoint(event) {
  outerpoint = event.target.value;
} // radio에 따른 outerpoint.

for (i = 0; i < outers.length; i++) {
  outers[i].addEventListener('click', getouterpoint);
} //상세 구현부

function checkyourpoint(a) {
  if (outerpoint == 'pedding') {
    a = a + 15;
  } else if (outerpoint == 'coat') {
    a = a + 7;
  } else if (outerpoint == 'cardigan') {
    a = a + 3;
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

