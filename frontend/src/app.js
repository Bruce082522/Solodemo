import Homepage from "./FrontendViews/Homepage.js";
import ProductPage from "./FrontendViews/ProductPage.js";
import ErrorPage from "./FrontendViews/ErrorPage.js";
import { parseRequestUrl } from "./utils.js";
const routes = {
  "/": Homepage,
  "product/:id": ProductPage,
};

const router = async () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  //   console.log(parseUrl);
  //   console.log(routes[parseUrl]);
  const page = routes[parseUrl] ? routes[parseUrl] : ErrorPage;
  const main = document.querySelector("#main-container");
  main.innerHTML = await page.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
