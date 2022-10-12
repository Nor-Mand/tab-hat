var body = document.getElementsByTagName("body")[0];

// Color change Section
window.onscroll = function () {
  var scroll = window.pageYOffset;

  if (scroll < 700) {
    body.style.backgroundColor = "#17171f";
  } else if (scroll >= 700 && scroll < 1600) {
    body.style.backgroundColor = "#DC1C13";
  } else if (scroll >= 1600 && scroll < 2700) {
    body.style.backgroundColor = "#FFCC25";
  } else if (scroll >= 2700 && scroll < 3600) {
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
