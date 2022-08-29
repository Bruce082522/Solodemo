import Homepage from "./FrontendViews/Homepage.js";
const router = () => {
  const main = document.querySelector("#main-container");
  main.innerHTML = Homepage.render();
};

window.addEventListener("load", router);
