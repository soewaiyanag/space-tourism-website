import "./style.css";
import "./shared_script";

const tabs = document.querySelectorAll("[data-tab]");
const name = document.getElementById("name");
const img = document.getElementById("crew-img");
const role = document.getElementById("role");
const bio = document.getElementById("bio");

const jsonURL = "./data.json";
fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    const { crew } = data;
    showDatas(crew, 0);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        showDatas(crew, index);
        removeActiveColor(tabs);
        activeColor(tab);
      });
    });
  });

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
