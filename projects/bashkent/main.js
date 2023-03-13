let hoverEffect = document.querySelectorAll(".hover-effect");
for(let i = 0; i < hoverEffect.length;i++){
    (function(index){
        hoverEffect[i].addEventListener("mouseover",function(){
            hoverEffect[index].classList.add("animation-active");
        });
        hoverEffect[i].addEventListener("mouseout",function(){
            hoverEffect[index].classList.remove("animation-active");
        })
    })(i);
}

let mobileSearchButton = document.querySelector(".mobile-search-button");
let mobileSearchPanel = document.querySelector(".mobile-search-panel");
let closeMobileSearchBtn = document.querySelector(".close-mobile-search");
mobileSearchButton.addEventListener("click",function(){
    mobileSearchPanel.classList.add("open");
});
closeMobileSearchBtn.addEventListener("click",function(){
    mobileSearchPanel.classList.remove("open");
})


let body = document.querySelector("body");
let navbarFixed = document.querySelector("header .navbar-fixed");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");
body.onscroll = function(){
    if(scrollY > 280){
        navbarFixed.classList.add("show");
    }else{
        navbarFixed.classList.remove("show")
    }
    if(scrollY > 400){
        pageUpScrollBtn.classList.add("show");
    }else{
        pageUpScrollBtn.classList.remove("show");
    }
}


pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}


let menuItemsBtns = document.querySelectorAll(".bashkent-menu-items .menu-btn");
let menuItemPanels = document.querySelectorAll(".bashkent-menu-items .menu-item-panel");

for(let i = 0; i < menuItemsBtns.length;i++){
    (function(index){
        menuItemsBtns[i].addEventListener("click",function(){
            for(let i = 0; i < menuItemsBtns.length; i++){
                menuItemsBtns[i].classList.remove("active-btn");
            }
            menuItemsBtns[index].classList.add("active-btn");
            for(let i = 0; i < menuItemPanels.length;i++){
                menuItemPanels[i].classList.add("d-none");
            }
            menuItemPanels[index].classList.remove("d-none");
        })
    })(i);
}


let galleryBtns = document.querySelectorAll(".bashkent-gallery .g-button");
let galleryPanels = document.querySelectorAll(".bashkent-gallery .gallery-panel");

for(let i = 0; i < galleryBtns.length;i++){
    (function(index){
        galleryBtns[i].addEventListener("click",function(){
            for(let i = 0; i < galleryBtns.length; i++){
                galleryBtns[i].classList.remove("active-gbtn");
            }
            galleryBtns[index].classList.add("active-gbtn");
            for(let i = 0; i < galleryPanels.length; i++){
                galleryPanels[i].classList.add("d-none");
            }
            galleryPanels[index].classList.remove("d-none")
        })
    })(i);
}