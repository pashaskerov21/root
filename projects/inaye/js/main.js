let mobileHeader = document.querySelector(".mobile-header");
let generalHeader = document.querySelector(".general-header");
let pageUpScrollBtn = document.querySelector(".page-up-scroll-btn");

window.addEventListener("scroll",function(){
    if(scrollY > 200){
        mobileHeader.classList.add("header-transform","fixed-top");
        generalHeader.classList.add("header-transform","fixed-top");
    }else{
        mobileHeader.classList.remove("header-transform","fixed-top");
        generalHeader.classList.remove("header-transform","fixed-top");
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


let collapseButton = document.querySelectorAll(".offcanvas-body .collapse-button");
let collapseButtonChevron = document.querySelectorAll(".offcanvas-body .collapse-button i");
for(let i = 0; i < collapseButton.length; i++){
    (function(index){
        collapseButton[i].addEventListener("click",function(){
            collapseButtonChevron[index].classList.toggle("chevron-rotate");
        })
    })(i);
}

let dropdownButton = document.querySelectorAll(".dropdown-button");
let navDropMenu = document.querySelectorAll(".nav-drop-menu");

for(let i = 0; i < dropdownButton.length; i++){
    (function(index){
        dropdownButton[i].addEventListener("mouseover",function(){
            navDropMenu[index].classList.remove("d-none");
        });
        dropdownButton[i].addEventListener("mouseout",function(){
            navDropMenu[index].classList.add("d-none");
        });
    })(i);
}

