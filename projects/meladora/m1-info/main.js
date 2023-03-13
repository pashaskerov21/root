let body = document.querySelector("body");
let mainNavbar = document.getElementById("main-navbar");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");
let changeLogoColor = document.getElementById("change-logo-color");
let changeLinkSColor = document.querySelectorAll("#navbar-links .navbar-links-item a");
let contactInfoNav = document.getElementById("contact-info-nav");

body.onscroll = function(){
    if(scrollY > 150){
        mainNavbar.classList.add("fixed-top");
        mainNavbar.classList.remove("bg-white");
        mainNavbar.classList.add("bg-dark");
        phoneSpan.classList.remove("text-dark");
        phoneSpan.classList.add("text-white");
        contactInfoNav.classList.remove("border-dark");
        contactInfoNav.classList.add("border-white");
        changeLogoColor.removeAttribute("src");
        changeLogoColor.setAttribute("src","img/header/white-logo.png");
        for(let i = 0; i < changeLinkSColor.length; i++){
            changeLinkSColor[i].style.color = "#fff";
        }
    }else{
        mainNavbar.classList.remove("fixed-top");
        mainNavbar.classList.remove("text-bg-dark");
        mainNavbar.classList.add("bg-white");
        phoneSpan.classList.remove("text-white");
        phoneSpan.classList.add("text-dark");
        contactInfoNav.classList.remove("border-white");
        contactInfoNav.classList.add("border-dark");
        changeLogoColor.removeAttribute("src");
        changeLogoColor.setAttribute("src","img/header/m-logo.png");
        for(let i = 0; i < changeLinkSColor.length; i++){
            changeLinkSColor[i].style.color = "#000";
        }
    }

    if(scrollY > 500){
        pageUpScrollBtn.classList.remove("d-none");
    }else{
        pageUpScrollBtn.classList.add("d-none");
    }
}

pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}

let phoneIconBtn = document.getElementById("phone-icon-button");
let phoneSpan = document.getElementById("phone-span");


phoneIconBtn.onclick = function(){
   
    phoneSpan.classList.toggle("d-none");
}



let openSearchBoxBtn = document.getElementById("open-search-box");
let navSearchBox = document.getElementById("nav-search-box");
let navbarLinksDiv = document.getElementById("navbar-links");
let closeSearchBox = document.getElementById("close-search-box");
let navbarLogo = document.getElementById("navbar-logo-div");

openSearchBoxBtn.onclick = function(){
    
    navbarLinksDiv.classList.add("d-none");
    
    navSearchBox.classList.remove("d-none");
    navSearchBox.style.position = "absolute";
    navSearchBox.style.right = 0;
    navSearchBox.style.top = "25px";
    navSearchBox.style.animation = "show-box 0.8s ease";
    if(screen.availWidth < 450){
        navbarLogo.style.opacity = 0;
    }
    
}

closeSearchBox.onclick = function(){
   
    navSearchBox.classList.add("d-none");
    navbarLinksDiv.classList.remove("d-none");
    navbarLogo.style.opacity = 1;

}
