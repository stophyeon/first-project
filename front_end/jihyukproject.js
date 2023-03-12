// 버튼을 누르면, 여태까지 넣었던 애들 합쳐서 계산
// 계산 후에 그거에 따라 점수 획득
// 받아온 최고 최저에 따라서 계산 
// 이제 outerpoint가 radio에 따라서 바뀔 수 있는 방법을 생각해야됨 . 
let outerpoint;

var outers = document.getElementsByName('outer');

function getouterpoint(event) {
  outerpoint = event.target.value;
}

for (i = 0; i < outers.length; i++) {
  outers[i].addEventListener('click', getouterpoint);
} //누를때마다 그 값이 outerpoint에 들어감 

function checkyourpoint(a) {
  if (outerpoint == 'pedding') {
    a = a + 15;
  } else if (outerpoint == 'coat') {
    a = a + 7;
  } else if (outerpoint == 'cardigan') {
    a = a + 3;
  }
  return a;
};

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
};

document.getElementById('button').addEventListener('click', function(event) {
  var yourpoint = 0;
  yourpoint = checkyourpoint(yourpoint);
  yourlook(yourpoint);
  console.log(yourpoint) ;
});

