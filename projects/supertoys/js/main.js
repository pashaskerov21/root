let pageUpScrollBtn = document.querySelector(".page-up-scroll-btn");
window.addEventListener("scroll", function(){
    if(scrollY > 400){
        pageUpScrollBtn.classList.remove("d-none")
    }else{
        pageUpScrollBtn.classList.add("d-none")
    }
});
pageUpScrollBtn.addEventListener("click",function(){
    window.scrollTo(0,0);
})
//MENU BUTTON
let mobileMenuButton = document.querySelector(".mobile-menu-button");
mobileMenuButton.addEventListener("click", () => {
    mobileMenuButton.classList.toggle("open")
});



// SEBET BUTTON
let sebetButton = document.querySelectorAll(".sebet-button");
let sebetButtonIcon = document.querySelectorAll(".sebet-button img");
let sebetButtonSpan = document.querySelectorAll(".sebet-button span");

for(let i = 0; i < sebetButton.length; i++){
    (function(index){
        sebetButton[i].addEventListener("click",function(){
            sebetButton[index].classList.toggle("active");
        })
    })(i);
};



// LIKE BUTTON
let likeButton = document.querySelectorAll(".like-button");

for(let i = 0; i < likeButton.length;i++){
    (function(index){
        likeButton[i].addEventListener("click",function(){
            if(likeButton[index].children[0].classList.contains("d-none")==false){
                likeButton[index].children[0].classList.add("d-none");
                likeButton[index].children[1].classList.remove("d-none");
            }else{
                likeButton[index].children[0].classList.remove("d-none");
                likeButton[index].children[1].classList.add("d-none");
            }
        })
    })(i);
}


