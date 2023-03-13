let body = document.querySelector("body");
let mainNavbar = document.getElementById("main-navbar");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");

body.onscroll = function(){
    if(scrollY > mainNavbar.offsetHeight){
        mainNavbar.classList.add("text-bg-dark");
    }else{
        mainNavbar.classList.remove("text-bg-dark")
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
    //navbarLogo.classList.add("d-none","d-sm-block");
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
    //navbarLogo.classList.remove("d-none","d-sm-block");
}





let allProductsBtn = document.getElementById("all-products");
let fruitProductsBtn = document.getElementById("fruit-products");
let vegetableProductsBtn = document.getElementById("vegetable-products");
let flourProductsBtn = document.getElementById("flour-products");
let otherProductsBtn = document.getElementById("other-products");


let allProductItems = document.querySelectorAll("#product-items .card");
let fruitItems = document.querySelectorAll(".fruit-item");
let vegetableItems = document.querySelectorAll(".vegetable-item");
let flourItems = document.querySelectorAll(".flour-item");
let otherItems = document.querySelectorAll(".other-item");


allProductsBtn.onclick = function(){
    allProductsBtn.style.color = "#91b40d";
    fruitProductsBtn.style.color = "#000";
    vegetableProductsBtn.style.color = "#000";
    flourProductsBtn.style.color = "#000";
    otherProductsBtn.style.color = "#000";

    for(let i = 0; i < allProductItems.length; i++){
        allProductItems[i].classList.remove("d-none");
    }
}

fruitProductsBtn.onclick = function(){

    allProductsBtn.style.color = "#000";
    fruitProductsBtn.style.color = "#91b40d";
    vegetableProductsBtn.style.color = "#000";
    flourProductsBtn.style.color = "#000";
    otherProductsBtn.style.color = "#000";

    for(let i = 0; i < allProductItems.length; i++){
        allProductItems[i].classList.add("d-none");
    }
    for(let i = 0; i < fruitItems.length; i++){
        fruitItems[i].classList.remove("d-none");
    }
}

vegetableProductsBtn.onclick = function(){
    allProductsBtn.style.color = "#000";
    fruitProductsBtn.style.color = "#000";
    vegetableProductsBtn.style.color = "#91b40d";
    flourProductsBtn.style.color = "#000";
    otherProductsBtn.style.color = "#000";

    for(let i = 0; i < allProductItems.length; i++){
        allProductItems[i].classList.add("d-none");
    }
    for(let i = 0; i < vegetableItems.length; i++){
        vegetableItems[i].classList.remove("d-none");
    }
}

flourProductsBtn.onclick = function(){
    allProductsBtn.style.color = "#000";
    fruitProductsBtn.style.color = "#000";
    vegetableProductsBtn.style.color = "#000";
    flourProductsBtn.style.color = "#91b40d";
    otherProductsBtn.style.color = "#000";

    for(let i = 0; i < allProductItems.length; i++){
        allProductItems[i].classList.add("d-none");
    }
    for(let i = 0; i < flourItems.length; i++){
        flourItems[i].classList.remove("d-none");
    }
}

otherProductsBtn.onclick = function(){
    allProductsBtn.style.color = "#000";
    fruitProductsBtn.style.color = "#000";
    vegetableProductsBtn.style.color = "#000";
    flourProductsBtn.style.color = "#000";
    otherProductsBtn.style.color = "#91b40d";
    
    for(let i = 0; i < allProductItems.length; i++){
        allProductItems[i].classList.add("d-none");
    }
    for(let i = 0; i < otherItems.length; i++){
        otherItems[i].classList.remove("d-none")
    }
}
