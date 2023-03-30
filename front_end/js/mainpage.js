var buttons = document.querySelectorAll(".weatherbutton");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });
    button.classList.add("active");
  });
});

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      console.log("Button clicked!");
      buttons.forEach(function(button) {
        button.classList.remove("active");
      });
      button.classList.add("active");
    });
  });
 
