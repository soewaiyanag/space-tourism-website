const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
hamburger.onclick = () => {
  navList.classList.toggle("hidden");
  if (navList.classList.contains("hidden")) {
    hamburger.src = "./assets/shared/icon-hamburger.svg";
  } else {
    hamburger.src = "./assets/shared/icon-close.svg";
  }
};

const toggleClass = (className) => {
  if (window.innerWidth < 640) {
    navList.classList.add(className);
  } else {
    navList.classList.remove(className);
  }
};

window.addEventListener("DOMContentLoaded", function () {
  toggleClass("h-screen");
});
window.addEventListener("resize", function () {
  toggleClass("h-screen");
});
