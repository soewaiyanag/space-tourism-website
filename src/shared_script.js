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
