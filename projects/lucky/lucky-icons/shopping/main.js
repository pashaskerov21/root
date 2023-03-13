let body = document.querySelector("body");


let topNavMenuBtn = document.querySelector(".tnav-menu-btn");
topNavMenuBtn.addEventListener("click", () => {
    topNavMenuBtn.classList.toggle("open")
});

let navbarGridSystem = document.getElementById("navbar-grid-system-div");
let navSearchDiv = document.getElementById("tnav-search-div");
let navMenuLinks = document.getElementById("tnav-menu-links");
let isOpenMenu = false;
topNavMenuBtn.addEventListener("click",function(){
    isOpenMenu = !isOpenMenu;
    if(isOpenMenu == true){
        navbarGridSystem.classList.remove("navbar-grid-system-1");
        navbarGridSystem.classList.add("navbar-grid-system-2");
        navSearchDiv.classList.remove("d-none");
        navMenuLinks.classList.remove("d-none");
    }else{
        navbarGridSystem.classList.remove("navbar-grid-system-2");
        navbarGridSystem.classList.add("navbar-grid-system-1");
        navSearchDiv.classList.add("d-none");
        navMenuLinks.classList.add("d-none");
    }
    
})


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




let productItems = document.querySelectorAll(".product-item");

let productPriceValue = document.querySelectorAll(".product-price-value"); //Mehsulun qiymetini gosteren p elementi
let productValue = document.querySelectorAll(".product-value"); // mehsulun sayini gosteren input elementi
let productSumValue = document.querySelectorAll(".product-sum-value"); // mehsulun cem meblegini gosteren p elementi
let decraseButton = document.querySelectorAll(".decrase-button");
let increaseButton = document.querySelectorAll(".increase-button");

let commonProductSumValue = document.getElementById("common-product-sum-value"); // umumi meblegi gosteren p elementi
let visibleSumValue = document.querySelectorAll(".visible-item .product-sum-value");
let mainSum = 0;
for(let i = 0; i < productItems.length;i++){
    if(productItems[i].classList.contains("d-lg-none") == false){
        productItems[i].classList.add("correct-item");
    }
}
mainSum = 0;
let correctItemValue = document.querySelectorAll(".correct-item .product-sum-value");
for(let i = 0; i < correctItemValue.length; i++){
    //alert(correctItemValue.length);
    mainSum += parseFloat(correctItemValue[i].innerHTML);
}
commonProductSumValue.innerHTML = mainSum.toFixed(2);


for(let i = 0; i < increaseButton.length; i++){
    (function(index){
        increaseButton[i].onclick = function(){
            let inputVal = parseInt(productValue[index].value);
            inputVal += 1;
            productValue[index].value = inputVal;
            decraseButton[index].removeAttribute("disabled");
            let pVal = parseFloat(productPriceValue[index].innerHTML);
            let sum = inputVal * pVal;
            productSumValue[index].innerHTML = sum.toFixed(2);
            

            
            console.log(mainSum);
            mainSum += pVal;
            commonProductSumValue.innerHTML = mainSum.toFixed(2);
            
        }

    })(i);
}
for(let i = 0; i < decraseButton.length; i++){
    (function(index){
        decraseButton[i].onclick = function(){
            let inputVal = parseInt(productValue[index].value);
            inputVal -= 1;
            productValue[index].value = inputVal;
            if(productValue[index].value == 1){
                decraseButton[index].setAttribute("disabled","");
            }
            let pVal = parseFloat(productPriceValue[index].innerHTML);
            let oldsum = parseFloat(productSumValue[index].innerHTML);
            let newsum = oldsum - pVal;
            productSumValue[index].innerHTML = newsum.toFixed(2);
            
            mainSum -= pVal;
            commonProductSumValue.innerHTML = mainSum.toFixed(2);
            
        }
    })(i);
}

let deleteProductBtns = document.querySelectorAll(".delete-product-button");
let shoppingSpan = document.querySelector("#nav-shopping-btn span");

let visibleItem = document.querySelectorAll(".visible-item");
shoppingSpan.innerHTML = visibleItem.length;

for(let i = 0; i < deleteProductBtns.length;i++){
    (function(index){
        deleteProductBtns[i].addEventListener("click",function(){
            productItems[index].classList.add("d-none","d-lg-none");
            //commonProductSumValue.innerHTML = mainSum - Number(productSumValue[index].innerHTML);
            let mainVal = parseFloat(commonProductSumValue.innerHTML);
            let itemVal = parseFloat(productSumValue[index].innerHTML);
            let result = mainVal - itemVal;
            commonProductSumValue.innerHTML = result.toFixed(2);
            mainSum = mainSum - itemVal;
            

            let shoppingSpanValue = parseInt(shoppingSpan.innerHTML);
            shoppingSpanValue -= 1;
            shoppingSpan.innerHTML = shoppingSpanValue;

        })
    })(i);
}

let navHeartBtn = document.getElementById("nav-heart-btn");
let navHeartBtnSpan = document.querySelector("#nav-heart-btn span")
let navHeartBtnSpanValue = parseInt(navHeartBtnSpan.innerHTML);
let cardWhiteHeartBtns = document.querySelectorAll(".card-white-heart-btn");
let cardFavoriteBtns = document.querySelectorAll(".card-favorite-btn");

for (let i = 0; i < cardWhiteHeartBtns.length; i++){
    (function(index){
      cardWhiteHeartBtns[i].addEventListener("click", myScript);
      function myScript(){
        cardWhiteHeartBtns[index].classList.add("d-none");
        cardFavoriteBtns[index].classList.remove("d-none");
        navHeartBtnSpanValue += 1;
        navHeartBtnSpan.innerHTML = navHeartBtnSpanValue;
      }
    })(i);
  }

  for (let i = 0; i < cardFavoriteBtns.length; i++){
    (function(index){
      cardFavoriteBtns[i].addEventListener("click", myScript);
      function myScript(){
        cardFavoriteBtns[index].classList.add("d-none");
        cardWhiteHeartBtns[index].classList.remove("d-none");
        navHeartBtnSpanValue -= 1;
        navHeartBtnSpan.innerHTML = navHeartBtnSpanValue;
      }
    })(i);
  }

let navShoppingBtn = document.getElementById("nav-shopping-btn");
//let navShoppingBtnSpan = document.querySelector("#nav-shopping-btn span");
let navShoppingBtnSpanValue = parseInt(shoppingSpan.innerHTML);
let productOrderBtns = document.querySelectorAll(".product-order-btn");
let isCheckedProduct = Array(productOrderBtns.length).fill(false);

let productToast = document.getElementById("product-toast");

let hiddenItems = document.querySelectorAll(".hidden-item");
let hiddenSumValue = document.querySelectorAll(".hidden-item .product-sum-value");


for(let i = 0; i < productOrderBtns.length; i++){
    (function(index){
        productOrderBtns[i].addEventListener("click",changeSituation);
        
        function changeSituation(){
            if(isCheckedProduct[index]==false){
                navShoppingBtnSpanValue += 1;
                shoppingSpan.innerHTML = navShoppingBtnSpanValue;
                isCheckedProduct[index] = true;
            }
            const toast = new bootstrap.Toast(productToast);
            toast.show();
            hiddenItems[index].classList.remove("d-none","d-lg-none");
            
            
            let mainVal = parseFloat(commonProductSumValue.innerHTML);
            let hiddenVal = parseFloat(hiddenSumValue[index].innerHTML);
            let result = mainVal + hiddenVal;
            mainSum = mainSum + hiddenVal;
            commonProductSumValue.innerHTML = result.toFixed(2);
        }
    })(i);
}

