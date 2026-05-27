import "./style.css";
import {homePage} from "./modules/home.js";
import {menuPage} from "./modules/menu.js";
import {contactPage} from "./modules/contact.js";
const mainContent = document.querySelector("#content");
const aside = document.querySelector("aside");
const navbar = document.querySelector("nav");
const burgerMenu = document.querySelector(".burger");
mainContent.classList.add(
  "w-full",
  "min-h-full",
  "flex",
  "flex-col",
  "items-center",
  "gap-4",
  "justify-center",
);
mainContent.appendChild(homePage());
navbar.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "home":
      mainContent.replaceChildren(homePage());
      break;
    case "menu":
      mainContent.replaceChildren(menuPage());
      break;
    case "contact":
      mainContent.replaceChildren(contactPage());
    default:
      return;
      break;
  }
});
burgerMenu.addEventListener("click", () => {
  aside.classList.toggle("hidden");
  aside.classList.toggle("sideMenu");
});
