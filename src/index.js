import blizzard from "./assets/Blizzard.png";
import remnant from "./assets/Remnant.jpg";
import battle from "./assets/battle.jpeg";
import ea from "./assets/ea.jpeg";
import epic from "./assets/epic.jpg";
import gog from "./assets/gog.png";
import horse from "./assets/horse.jpg";
import ig from "./assets/ig.png";
import logo from "./assets/logo.png";
import backgroundImage from "./assets/pxfuel.jpg";
import rockstar from "./assets/rockstar.png";
import sengoku from "./assets/sengoku.jpg";
import steamCard from "./assets/steam-card.png";
import steam from "./assets/steam.png";
import store from "./assets/store.jpg";
import ubi from "./assets/ubi.png";
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
const mobileMenu = [mobileMenuContainer, ...document.querySelectorAll(".mobile-main-menu .menu-item"), mobileIcon];

const categoryContainer = document.querySelector(".mobile-options-container");
const categoryOptions = [categoryContainer, ...document.querySelectorAll(".mobile-options .mobile-option-item")];

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-container")
const options = [...document.querySelectorAll(".option-item"), ...document.querySelectorAll(".mobile-option-item")];
console.log(options)

document.getElementById("sengoku").setAttribute("src", sengoku);
document.getElementById("horse").setAttribute("src", horse);
document.getElementById("remnant").setAttribute("src", remnant);

document.getElementById("steam").setAttribute("src", steam);
document.getElementById("battle").setAttribute("src", battle);
document.getElementById("microsoft").setAttribute("src", store);
document.getElementById("ubisoft").setAttribute("src", ubi);
document.getElementById("rockstar").setAttribute("src", rockstar);
document.getElementById("epic").setAttribute("src", epic);
document.getElementById("ea").setAttribute("src", ea);
document.getElementById("gog").setAttribute("src", gog);

document.getElementById("steam-card").setAttribute("src", steamCard);
document.getElementById("ig-card").setAttribute("src", ig);
document.getElementById("blizzard-card").setAttribute("src", blizzard);

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
    show = !show;
    
    staggerAnimation(mobileMenu, "menu-item", "menu-item-active", "mobile-main-menu-active", 140, show)
});


// category reveal animation
const expandMenu = document.querySelector(".options .ham-bar");

let expand = false
expandMenu.addEventListener("click", ()=>{
    expand = !expand;

    staggerAnimation(categoryOptions, "mobile-option-item", "mobile-option-item-active", "mobile-options-container-active", 140, expand)
});

// modal reveal
options.forEach((item)=>{
    item.addEventListener("click", ()=>{
        modal.classList.toggle("modal-active");
    });
});

overlay.addEventListener("click", ()=>{
    modal.classList.remove("modal-active")
})

