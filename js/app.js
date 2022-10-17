// Color change Section
var body = document.getElementsByTagName("body")[0];
window.onscroll = function () {
  var scroll = window.pageYOffset;
  console.log(scroll);
  if (scroll < 700) {
    body.style.backgroundColor = "#17171f";
  } else if (scroll >= 700 && scroll < 1400) {
    body.style.backgroundColor = "#DC1C13";
  } else if (scroll >= 1400 && scroll < 2300) {
    body.style.backgroundColor = "#FFCC25";
  } else if (scroll >= 2300 && scroll < 3600) {
    body.style.backgroundColor = "#17171f";
  }
};

// Menu sticky
function windowScroll() {
  const navbar = document.getElementById("topnav");
  if (navbar != null) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

// Menu Burguer
const menu = document.querySelector(".menu-burguer");
const navbar = document.querySelector("nav");
const bodyBlur = document.querySelector(".body");

menu.addEventListener("click", function () {
  if (navbar.classList.contains("menu-close")) {
    navbar.classList.remove("menu-close");
    navbar.classList.add("menu-open");
    bodyBlur.classList.add("body-blur");
  } else {
    navbar.classList.remove("menu-open");
    navbar.classList.add("menu-close");
    bodyBlur.classList.remove("body-blur");
  }
});
