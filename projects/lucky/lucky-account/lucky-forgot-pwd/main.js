let body = document.querySelector("body");


let topNavMenuBtn = document.querySelector(".tnav-menu-btn");
topNavMenuBtn.addEventListener("click", () => {
    topNavMenuBtn.classList.toggle("open")
});

// let navbarGridSystem = document.getElementById("navbar-grid-system-div");
// let navSearchDiv = document.getElementById("tnav-search-div");
// let navMenuLinks = document.getElementById("tnav-menu-links");
// let isOpenMenu = false;
// topNavMenuBtn.addEventListener("click",function(){
//     isOpenMenu = !isOpenMenu;
//     if(isOpenMenu == true){
//         navbarGridSystem.classList.remove("navbar-grid-system-1");
//         navbarGridSystem.classList.add("navbar-grid-system-2");
//         navSearchDiv.classList.remove("d-none");
//         navMenuLinks.classList.remove("d-none");
//     }else{
//         navbarGridSystem.classList.remove("navbar-grid-system-2");
//         navbarGridSystem.classList.add("navbar-grid-system-1");
//         navSearchDiv.classList.add("d-none");
//         navMenuLinks.classList.add("d-none");
//     }
    
// })


let termsLinkBtn = document.getElementById("terms-link-btn");
let termsIcon = document.querySelector("#terms-link-btn i")
let termsLinkMenu = document.getElementById("terms-link-menu");

termsIcon.addEventListener("click", () => {
    if(window.outerWidth < 768){
       
    if(termsLinkMenu.classList.contains("d-none")==true){
        termsIcon.classList.remove("rotate-icon-2");
        termsIcon.classList.add("rotate-icon-1");
        termsLinkMenu.classList.remove("d-none");
        
    }else{
        termsIcon.classList.remove("rotate-icon-1");
        termsIcon.classList.add("rotate-icon-2");
        termsLinkMenu.classList.add("d-none");
    }
    }
});
termsLinkBtn.onmouseover = function(){
    if(window.outerWidth > 768){
        termsIcon.classList.remove("rotate-icon-2");
        termsIcon.classList.add("rotate-icon-1");
        termsLinkMenu.classList.remove("d-none","d-md-none")
    }
};
termsLinkBtn.onmouseout = function(){
    if(window.outerWidth > 768){
        termsIcon.classList.remove("rotate-icon-1");
        termsIcon.classList.add("rotate-icon-2");
        termsLinkMenu.classList.add("d-none","d-md-none");
    }
}





let btmNavCategoryBtn = document.getElementById("bnav-category-btn");
let btmNavCategoryMenu = document.getElementById("bnav-category-menu");
let btmNavCategoryName = document.getElementById("btn-name");



btmNavCategoryName.addEventListener("click",() => {
    if(btmNavCategoryMenu.classList.contains("d-none") == true){
        btmNavCategoryMenu.classList.remove("d-none");
    }else{
        btmNavCategoryMenu.classList.add("d-none");
    }  
});


// mobile gorunusde categoriya bolmelerinin alt menyularinin acilib baglanmasi
let mobileMenuBtns = document.querySelectorAll(".mobile-menu-btns");
let categoryItemsMenus = document.querySelectorAll(".category-item-menu");
let mobileMenuBtnIcons = document.querySelectorAll(".mobile-menu-btns i");

for(let i = 0; i < mobileMenuBtns.length; i++){
    (function(index){
        mobileMenuBtns[i].addEventListener("click",function(){
            if(categoryItemsMenus[index].classList.contains("d-none") == true){
                categoryItemsMenus[index].classList.remove("d-none");
                mobileMenuBtnIcons[index].classList.remove("rotate-icon-2");
                mobileMenuBtnIcons[index].classList.add("rotate-icon-1");
            }else{
                categoryItemsMenus[index].classList.add("d-none");
                mobileMenuBtnIcons[index].classList.remove("rotate-icon-1");
                mobileMenuBtnIcons[index].classList.add("rotate-icon-2");
            }
        });
        
    })(i);
}



btmNavCategoryBtn.onmouseover = function(){
    if(window.outerWidth > 768){
        btmNavCategoryMenu.classList.remove("d-none","d-md-none");
    }
}
btmNavCategoryBtn.onmouseout = function(){
    if(window.outerWidth > 768){
        btmNavCategoryMenu.classList.add("d-none","d-md-none");
    }    
}

let categoryItemsBtns = document.querySelectorAll(".category-item");


for(let i = 0; i < categoryItemsBtns.length;i++){
    (function(index){
        categoryItemsBtns[i].addEventListener("mouseover",function(){
            if(window.outerWidth > 768){
                categoryItemsMenus[index].classList.remove("d-none","d-md-none")
            }
        })
    })(i);
}
for(let i = 0; i < categoryItemsBtns.length;i++){
    (function(index){
        categoryItemsBtns[i].addEventListener("mouseout",function(){
            if(window.outerWidth > 768){
                categoryItemsMenus[index].classList.add("d-none","d-md-none")
            }
        })
    })(i);
}





// navbarGridSystem
let navbarLogo = document.getElementById("tnav-logo");
let navbarIcons = document.getElementById("tnav-icons");
// navSearchDiv
// navMenuLinks
// btmNavCategoryBtn

window.addEventListener("scroll",function(){
    if(window.outerWidth > 900){
        if(window.scrollY > 320){
            navbarGridSystem.removeAttribute("id");
            navbarGridSystem.setAttribute("id","fixed-navbar-grid-system");
            navbarGridSystem.classList.add("fixed-top");
            navbarGridSystem.style.backgroundColor = "#fc8410";
            navbarGridSystem.style.boxShadow = "0 2px 5px #000";
            navbarLogo.classList.add("d-none");
            navMenuLinks.classList.add("d-md-none")
        }else{
            navbarGridSystem.removeAttribute("id");
            navbarGridSystem.setAttribute("id","navbar-grid-system-div");
            navbarGridSystem.classList.remove("fixed-top");
            navbarGridSystem.style.backgroundColor = "transparent";
            navbarGridSystem.style.boxShadow = "none";
            navbarLogo.classList.remove("d-none");
            navMenuLinks.classList.remove("d-md-none");
        }
    }else{
        navbarGridSystem.removeAttribute("id");
        navbarGridSystem.setAttribute("id","navbar-grid-system-div");
        navbarGridSystem.classList.remove("fixed-top");
        navbarGridSystem.style.backgroundColor = "transparent";
        navbarGridSystem.style.boxShadow = "none";
        navbarLogo.classList.remove("d-none");
        navMenuLinks.classList.remove("d-md-none");
    }
})

let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");

body.onscroll = function(){
    
    if(scrollY > 500){
        pageUpScrollBtn.classList.remove("d-none");
    }else{
        pageUpScrollBtn.classList.add("d-none");
    }
}

pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}






