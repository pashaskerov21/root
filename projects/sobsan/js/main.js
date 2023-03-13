let mobileHeader = document.querySelector(".mobile-header");
let generalBottomNavbar = document.querySelector(".general-header .bottom-navbar");
let pageUpScrollBtn = document.querySelector(".page-up-scroll-btn");

let bottomNavUstaLogo = document.querySelector(".bottom-navbar .usta-logo");
let fixHeaderIcons = document.querySelector(".bottom-navbar .fix-header-icons");

window.addEventListener("scroll",function(){
    if(scrollY > 200){
        mobileHeader.classList.add("header-transform","fixed-top");
    }else{
        mobileHeader.classList.remove("header-transform","fixed-top");
    }
    if(scrollY > 250){
        generalBottomNavbar.classList.add("header-transform","fixed-top");
        bottomNavUstaLogo.classList.add("d-none");
        fixHeaderIcons.classList.remove("d-none")
    }else{
        generalBottomNavbar.classList.remove("header-transform","fixed-top");
        bottomNavUstaLogo.classList.remove("d-none");
        fixHeaderIcons.classList.add("d-none")
    }
    if(scrollY > 400){
        pageUpScrollBtn.classList.remove("d-none");
    }else{
        pageUpScrollBtn.classList.add("d-none");
    }
});

//scroll button function
pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}


let collapseButton = document.querySelectorAll(".collapse-button");
let rightChevron = document.querySelectorAll(".collapse-button .fa-chevron-right");

for(let i = 0; i< collapseButton.length;i++){
    (function(index){
        collapseButton[i].addEventListener("click",function(){
            if(collapseButton[index].classList.contains("status-open")==false){
                collapseButton[index].classList.add("status-open");
                rightChevron[index].classList.remove("rotate-right");
                rightChevron[index].classList.add("rotate-down");
            }else{
                collapseButton[index].classList.remove("status-open");
                rightChevron[index].classList.remove("rotate-down");
                rightChevron[index].classList.add("rotate-right");
            }
        })
    })(i);
}

let topNavDropdowns = document.querySelectorAll(".tn-dropdown");
let topNavDropdownMenus = document.querySelectorAll(".tn-dropdown-menu");

for(let i = 0;i < topNavDropdowns.length;i++){
    (function(index){
        topNavDropdowns[i].addEventListener("mouseover",function(){
            topNavDropdownMenus[index].classList.remove("d-none")
        });
        topNavDropdowns[i].addEventListener("mouseout",function(){
            topNavDropdownMenus[index].classList.add("d-none")
        });
    })(i);
}

let altCategoryPanelButtons = document.querySelectorAll(".alt-category-panel-button");
let altCategoryPanelButtonLinks = document.querySelectorAll(".alt-category-panel-button .bottom-nav-link");
let altCategoryPanel = document.querySelector(".alt-category-panel");
let altCategoryPanelMenu = document.querySelectorAll(".alt-category-panel-menu")

for(let i = 0; i < altCategoryPanelButtons.length; i++){
    (function(index){
        altCategoryPanelButtons[index].addEventListener("mouseover",function(){
            altCategoryPanel.classList.remove("d-none");
            for(let i = 0; i < altCategoryPanelMenu.length; i++){
                altCategoryPanelMenu[i].classList.add("d-none")
            }
            altCategoryPanelMenu[index].classList.remove("d-none");
        });
        altCategoryPanelButtons[index].addEventListener("mouseout",function(){
            altCategoryPanel.classList.add("d-none");
        });
        altCategoryPanel.addEventListener("mouseover",function(){
            altCategoryPanel.classList.remove("d-none");
        });
        altCategoryPanel.addEventListener("mouseout",function(){
            altCategoryPanel.classList.add("d-none");
        });

    })(i);
}
