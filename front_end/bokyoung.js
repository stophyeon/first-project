// json 파일의 아이템을 fetch로 받아오기
// 문법 fetch('경로/파일.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
function loadItems() {
  return fetch('json/clothes.json')
    .then(response => response.json())
    .then(json => json.items);  //json에 있는 items 배열 리턴
}

// HTML item list 만들기
function createHTMLString(item) {
  return `
    <li class="item">
        <alt="${item.type}" class="item__img" />
        <span class="item__description">${item.name}</span>
    </li>
    `;
}

//받아온 items를 display 화면에 보여주기
function displayItems(items) {
  const container = document.querySelector('.items') //elements 받아오기
  container.innerHTML = items.map(item => createHTMLString(item)).join('') 
  //데이터 배열을 html li 태그로 변환
  //문자열 배열들을 병합 join api 사용
}


loadItems()
  .then(items => displayItems(items))
  .catch(console.log);
