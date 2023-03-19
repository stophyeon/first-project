const toggleBtn = document.querySelector('#toggle-btn'); // 버튼 요소를 선택
const target = document.querySelector('#target'); // 표시/숨김 대상 요소를 선택
let isShown = false; // 현재 표시되고 있는지 여부를 나타내는 변수

toggleBtn.addEventListener('click', () => {
  if (target.style.display !== 'none') {
    target.style.display = 'none'; // 현재 표시되고 있으면 hide로 바꿈
  } else {
    target.style.display = 'block'; // 현재 표시되고 있지 않으면 block으로 바꿈
  }
});
