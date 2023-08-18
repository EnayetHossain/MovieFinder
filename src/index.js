import logo from "./assets/logo.png";
import backgroundImage from "./assets/pxfuel.jpg";
import "./styles/style.scss";

document.getElementById("logo").setAttribute("src", logo);
document.querySelector("header").style.backgroundImage = `url(${backgroundImage})`;
// console.log(document.querySelector("header"))