let passwordVisibleButton = document.querySelector(".password-visible");
let eyeIcon = document.querySelector(".password-visible .fa-eye");
let eyeSlashIcon = document.querySelector(".password-visible .fa-eye-slash");
let passwordInput = document.getElementById("master-password");
passwordVisibleButton.addEventListener("click",function(){
    if(eyeIcon.classList.contains("d-none")==true){
        eyeSlashIcon.classList.add("d-none");
        eyeIcon.classList.remove("d-none");
        passwordInput.removeAttribute("type");
        passwordInput.setAttribute("type","text");
    }else{
        eyeIcon.classList.add("d-none");
        eyeSlashIcon.classList.remove("d-none");
        passwordInput.removeAttribute("type");
        passwordInput.setAttribute("type","password");
    }
});

let mastersButtons = document.querySelectorAll(".masters-buttons button");
let mastersForm = document.querySelectorAll(".masters-form");
mastersButtons[0].addEventListener("click",function(){
    mastersButtons[1].classList.remove("active");
    mastersForm[1].classList.add("d-none");
    mastersButtons[0].classList.add("active");
    mastersForm[0].classList.remove("d-none");
});
mastersButtons[1].addEventListener("click",function(){
    mastersButtons[0].classList.remove("active");
    mastersForm[0].classList.add("d-none");
    mastersButtons[1].classList.add("active");
    mastersForm[1].classList.remove("d-none");
});


let mastersCategoiresButtons = document.querySelectorAll(".masters-categories-buttons button");
let mastersCategories = document.querySelectorAll(".masters-category");
for(let i = 0; i < mastersCategoiresButtons.length; i++){
    (function(index){
        mastersCategoiresButtons[i].addEventListener("click",function(){
            for(let i = 0; i < mastersCategoiresButtons.length; i++){
                mastersCategoiresButtons[i].classList.remove("active");
                mastersCategories[i].classList.add("d-none");
            };
            mastersCategoiresButtons[index].classList.add("active");
            mastersCategories[index].classList.remove("d-none");
        });
    })(i);
};