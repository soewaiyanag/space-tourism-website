import "./style.css";
import "./shared_script";

const tabs = document.querySelectorAll("[data-tab]");

const name = document.getElementById("name");
const landscape = document.getElementById("landscape");
const portrait = document.getElementById("portrait");
const description = document.getElementById("description");

const elements = [name, landscape, portrait, description];

let requestURL = "./data.json";
let request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const { technology } = request.response;
  showDatas(technology, 0);

  tabs.forEach((tab, index) => {
    // Event
    tab.addEventListener("click", () => {
      removeActive(tabs);
      tab.classList.add("tech-active");
      transition();
      setTimeout(() => {
        showDatas(technology, index);
      }, 200);
    });
  });
};

function removeActive(els) {
  els.forEach((el) => {
    el.classList.remove("tech-active");
  });
}

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
  landscape.src = data[index].images.landscape;
  portrait.src = data[index].images.portrait;
  description.innerText = data[index].description;
  //   = portrait =; description =;
}
