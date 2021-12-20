import "./style.css";
import "./shared_script";

const planetPic = document.getElementById("planet-pic");
const planetName = document.getElementById("planet-name");
const aboutPlanet = document.getElementById("about-planet");
const travelDistance = document.getElementById("travel-distance");
const travelTime = document.getElementById("travel-time");
const tabs = document.querySelectorAll("[data-tab]");

const jsonURL = "./data.json";
fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    const { destinations } = data;
    showDatas(destinations, 0);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        showDatas(destinations, index);
        removeBorders(tabs);
        addBorder(tab);
      });
    });
  });

function showDatas(data, index) {
  planetPic.src = data[index].images.png ?? "error";
  planetName.innerText = data[index].name ?? "error";
  aboutPlanet.innerText = data[index].description ?? "error";
  travelDistance.innerText = data[index].distance ?? "error";
  travelTime.innerText = data[index].travel ?? "error";
}

function removeBorders(els) {
  els.forEach((el) => {
    el.classList.remove("des-active");
  });
}

function addBorder(el) {
  el.classList.add("des-active");
}
