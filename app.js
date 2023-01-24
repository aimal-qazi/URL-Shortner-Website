let menu = document.querySelector("#m-i");
let navbar = document.querySelector(".list");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
});

window.onscroll = () => {
  navbar.classList.remove("open");
};
