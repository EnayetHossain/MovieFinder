import remnant from "./assets/Remnant.jpg";
import horse from "./assets/horse.jpg";
import logo from "./assets/logo.png";
import backgroundImage from "./assets/pxfuel.jpg";
import sengoku from "./assets/sengoku.jpg";

import "./styles/style.scss";

document.getElementById("logo").setAttribute("src", logo);
const header = document.querySelector("header");
header.style.backgroundImage = `url(${backgroundImage})`;

const searchBar = document.querySelector(".search-bar");
const optionItems = [...document.querySelectorAll(".option-item"), searchBar];
const optionItems2 = [searchBar, ...document.querySelectorAll(".option-item")];
const closeBtn = document.querySelector(".fa-x");
const searchBtn = document.querySelector(".search-btn");

// search bar reveal animation
searchBtn.addEventListener("click", ()=>{
    optionItems.forEach((item, index)=>{
        setTimeout(()=>{
            if(item.className === "option-item"){
                item.classList.add("option-item-hide");
            }else{
                item.classList.add("search-bar-active");
            }
        }, index * 140);
    });

    closeBtn.style.visibility = "visible";
});

// search bar hide animation
closeBtn.addEventListener("click", ()=>{
    optionItems2.forEach((item, index)=>{
        setTimeout(()=>{
            if(item.classList.contains("search-bar")){
                item.classList.remove("search-bar-active");
            }else{
                item.classList.remove("option-item-hide");
            }
        }, index * 140);
    });

    closeBtn.style.visibility = "hidden";
});

document.getElementById("sengoku").setAttribute("src", sengoku);
document.getElementById("horse").setAttribute("src", horse);
document.getElementById("remnant").setAttribute("src", remnant);