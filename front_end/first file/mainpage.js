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
  });
 

var iframeButton = document.getElementById("iframebutton");

iframeButton.addEventListener("click", function () {
  var iframe = document.getElementById("myIframe");
  if (iframe.style.display === "none") {
    iframe.style.display = "block";
    iframe.src = "./clothesroom.html"; // 옷장파일
  } else {
    iframe.style.display = "none";
    iframe.src = "";
  }
});
