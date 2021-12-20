import "./style.css";
import "./shared_script";

const tabs = document.querySelectorAll("[data-tab]");
const name = document.getElementById("name");
const landscape = document.getElementById("landscape");
const portrait = document.getElementById("portrait");
const description = document.getElementById("description");

const jsonURL = "./data.json";
fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    const { technology } = data;
    showDatas(technology, 0);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        showDatas(technology, index);
        removeActive(tabs);
        tab.classList.add("tech-active");
      });
    });
  });

function removeActive(els) {
  els.forEach((el) => {
    el.classList.remove("tech-active");
  });
}

function showDatas(data, index) {
  name.innerText = data[index].name;
  landscape.src = data[index].images.landscape;
  portrait.src = data[index].images.portrait;
  description.innerText = data[index].description;
}
