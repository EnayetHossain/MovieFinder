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

const mobileMenuContainer = document.querySelector(".mobile-main-menu");
const mobileIcon = document.querySelector(".mobile-icon");
const mobileMenu = [mobileMenuContainer, ... document.querySelectorAll(".mobile-main-menu .menu-item"), mobileIcon];

document.getElementById("sengoku").setAttribute("src", sengoku);
document.getElementById("horse").setAttribute("src", horse);
document.getElementById("remnant").setAttribute("src", remnant);

// stagger animation
const staggerAnimation = (menuArray, findClass, class1, class2, staggerTime, isAdd=true)=>{
    menuArray.forEach((item, index)=>{
        setTimeout(()=>{
            if(item.classList.contains(findClass)){
                if(isAdd){
                    item.classList.add(class1);
                }else{
                    item.classList.remove(class1);
                }
            }else{
                if(isAdd){
                    item.classList.add(class2);
                }else{
                    item.classList.remove(class2);
                }
            }
        }, index * staggerTime)
    });
}

// search bar reveal animation
searchBtn.addEventListener("click", ()=>{
    staggerAnimation(optionItems, "option-item", "option-item-hide", "search-bar-active", 140, true)

    closeBtn.style.visibility = "visible";
});

// search bar hide animation
closeBtn.addEventListener("click", ()=>{
    staggerAnimation(optionItems2, "option-item", "option-item-hide", "search-bar-active", 140, false)
    closeBtn.style.visibility = "hidden";
});

// mobile menu reveal animation
const hamBar = document.querySelector('.ham-bar')

let show = false
hamBar.addEventListener("click", ()=>{
    show = !show
    staggerAnimation(mobileMenu, "menu-item", "menu-item-active", "mobile-main-menu-active", 140, show)
});


