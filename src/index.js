import './style.css';
import { home } from "./modules/home";
import { menu } from "./modules/menu";
import { contact } from "./modules/contact";


document.getElementById("home").addEventListener("click", function() {
  home();
});

document.getElementById("menu").addEventListener("click", function() {
  menu();
});

document.getElementById("contact").addEventListener("click", function() {
  contact();
});