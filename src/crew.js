import "./style.css";
import "./shared_script";

const tabs = document.querySelectorAll("[data-tab]");

const name = document.getElementById("name");
const img = document.getElementById("crew-img");
const role = document.getElementById("role");
const bio = document.getElementById("bio");

const elements = [name, img, role, bio];

let requestURL = "./data.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const { crew } = request.response;
  showDatas(crew, 0);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      transition();
      setTimeout(() => {
        showDatas(crew, index);
        removeActiveColor(tabs);
        activeColor(tab);
      }, 200);
    });
  });
};

function transition() {
  elements.forEach((element) => {
    element.style.opacity = 0;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 300);
  });
}

function showDatas(data, index) {
  name.innerText = data[index].name;
  role.innerText = data[index].role;
  img.src = data[index].images.png;
  bio.innerText = data[index].bio;
}

function removeActiveColor(els) {
  els.forEach((el) => {
    el.classList.remove("bg-white");
    el.classList.add("bg-natural");
  });
}

function activeColor(el) {
  el.classList.remove("bg-natural");
  el.classList.add("bg-white");
}
