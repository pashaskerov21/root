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





let allProductsBtn = document.getElementById("all-products");
let fruitProductsBtn = document.getElementById("fruit-products");
let vegetableProductsBtn = document.getElementById("vegetable-products");
let flourProductsBtn = document.getElementById("flour-products");
let otherProductsBtn = document.getElementById("other-products");


let allProductItems = document.querySelectorAll("#product-items button");
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

let meladoraProductSection = document.getElementById("meladora-products-section");

let appleCard = document.getElementById("apple-card");
let armudCard = document.getElementById("armud-card");
let portagalCard = document.getElementById("portagal-card");
let saftaliCard = document.getElementById("saftali-card");
let gilasCard = document.getElementById("gilas-card");
let gavaliCard = document.getElementById("gavali-card");
let qozCard = document.getElementById("qoz-card");
let pomidorCard = document.getElementById("pomidor-card");
let taxilCard = document.getElementById("taxil-card");
let tingCard = document.getElementById("ting-card");

let appleCardInfo = document.getElementById("apple-card-info");
let armudCardInfo = document.getElementById("armud-card-info");
let portagalCardInfo = document.getElementById("portagal-card-info");
let saftaliCardInfo = document.getElementById("saftali-card-info");
let gilasCardInfo = document.getElementById("gilas-card-info");
let gavaliCardInfo = document.getElementById("gavali-card-info");
let qozCardInfo = document.getElementById("qoz-card-info");
let pomidorCardInfo = document.getElementById("pomidor-card-info");
let taxilCardInfo = document.getElementById("taxil-card-info");
let tingCardInfo = document.getElementById("ting-card-info");

let closeAppleCardBtn = document.getElementById("close-apple-card-btn");
let closeArmudCardBtn = document.getElementById("close-armud-card-btn");
let closePortagalCardBtn = document.getElementById("close-portagal-card-btn");
let closeSaftaliCardBtn = document.getElementById("close-saftali-card-btn");
let closeGilasCardBtn = document.getElementById("close-gilas-card-btn");
let closeGavaliCardBtn = document.getElementById("close-gavali-card-btn");
let closeQozCardBtn = document.getElementById("close-qoz-card-btn");
let closePomidorCardBtn = document.getElementById("close-pomidor-card-btn");
let closeTaxilCardBtn = document.getElementById("close-taxil-card-btn");
let closeTingCardBtn = document.getElementById("close-ting-card-btn");


// alma
appleCard.onclick = function(){
    appleCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeAppleCardBtn.onclick = function(){
    appleCardInfo.style.animation = "";
    appleCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}


// armud
armudCard.onclick = function(){
    armudCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeArmudCardBtn.onclick = function(){
    armudCardInfo.style.animation = "";
    armudCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}


// portagal
portagalCard.onclick = function(){
    portagalCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closePortagalCardBtn.onclick = function(){
    portagalCardInfo.style.animation = "";
    portagalCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}

// saftali
saftaliCard.onclick = function(){
    saftaliCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeSaftaliCardBtn.onclick = function(){
    saftaliCardInfo.style.animation = "";
    saftaliCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}
// gilas
gilasCard.onclick = function(){
    gilasCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeGilasCardBtn.onclick = function(){
    gilasCardInfo.style.animation = "";
    gilasCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}
// gavali
gavaliCard.onclick = function(){
    gavaliCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeGavaliCardBtn.onclick = function(){
    gavaliCardInfo.style.animation = "";
    gavaliCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}

// qoz
qozCard.onclick = function(){
    qozCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeQozCardBtn.onclick = function(){
    qozCardInfo.style.animation = "";
    qozCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}

// pomidor
pomidorCard.onclick = function(){
    pomidorCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closePomidorCardBtn.onclick = function(){
    pomidorCardInfo.style.animation = "";
    pomidorCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}

// taxil
taxilCard.onclick = function(){
    taxilCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeTaxilCardBtn.onclick = function(){
    taxilCardInfo.style.animation = "";
    taxilCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}

// ting
tingCard.onclick = function(){
    tingCardInfo.classList.remove("d-none");
    meladoraProductSection.style.opacity = 0.2;
    if(screen.width < 500){
        window.scrollTo(0,310);
    }else if(screen.width > 500){
        window.scrollTo(0,380)
    }

    appleCard.setAttribute("disabled","");
    armudCard.setAttribute("disabled","");
    portagalCard.setAttribute("disabled","");
    saftaliCard.setAttribute("disabled","");
    gilasCard.setAttribute("disabled","");
    gavaliCard.setAttribute("disabled","");
    qozCard.setAttribute("disabled","");
    pomidorCard.setAttribute("disabled","");
    taxilCard.setAttribute("disabled","");
    tingCard.setAttribute("disabled","");
}
closeTingCardBtn.onclick = function(){
    tingCardInfo.style.animation = "";
    tingCardInfo.classList.add("d-none");
    meladoraProductSection.style.opacity = 1;

    appleCard.removeAttribute("disabled");
    armudCard.removeAttribute("disabled");
    portagalCard.removeAttribute("disabled");
    saftaliCard.removeAttribute("disabled");
    gilasCard.removeAttribute("disabled");
    gavaliCard.removeAttribute("disabled");
    qozCard.removeAttribute("disabled");
    pomidorCard.removeAttribute("disabled");
    taxilCard.removeAttribute("disabled");
    tingCard.removeAttribute("disabled");
}






// console.log(window.scrollY);