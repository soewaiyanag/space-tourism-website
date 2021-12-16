import "./style.css";
import "./shared_script";
import { bgLazyLoad } from "./bgLazyLoad";

const main = document.querySelector("main");
const bgImgsClasses = [
  "bg-home-mobile",
  "sm:bg-home-tablet",
  "md:bg-home-desktop",
];

bgLazyLoad(main, bgImgsClasses);
