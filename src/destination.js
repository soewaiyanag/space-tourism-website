import "./style.css";
import "./shared_script";
import { bgLazyLoad } from "./bgLazyLoad";

const main = document.querySelector("main");
const planetPic = document.getElementById("planet-pic");
const planetName = document.getElementById("planet-name");
const aboutPlanet = document.getElementById("about-planet");
const travelDistance = document.getElementById("travel-distance");
const travelTime = document.getElementById("travel-time");
const tabs = document.querySelectorAll("[data-tab]");

// LOAD JSON FROM data.json && SHOW ON GUI
let requestURL = "./data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = () => {
  const data = request.response;
  const planetData = data.destinations;

  showDatas(planetData, 0);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      removeBorders(tabs);
      addBorder(tab);
      showDatas(planetData, index);
    });
  });
};

function showDatas(data, index) {
  planetPic.src = data[index].images.png ?? "error";
  planetName.innerText = data[index].name ?? "error";
  aboutPlanet.innerText = data[index].description ?? "error";
  travelDistance.innerText = data[index].distance ?? "error";
  travelTime.innerText = data[index].travel ?? "error";
}

function removeBorders(els) {
  els.forEach((el) => {
    el.classList.remove("border-b-2");
    el.classList.remove("border-white");
  });
}

function addBorder(el) {
  el.classList.add("border-b-2");
  el.classList.add("border-white");
}
