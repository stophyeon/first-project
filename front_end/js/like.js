const itemList = document.getElementById("item-list");
const likeButtons = itemList.querySelectorAll(".like");

likeButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    const like = li.classList.contains("like");

    if (like) {
      li.classList.remove("like");
      button.textContent = "좋아요";
    } else {
      li.classList.add("like");
      button.textContent = "좋아요 해제";
    }
  });
});
