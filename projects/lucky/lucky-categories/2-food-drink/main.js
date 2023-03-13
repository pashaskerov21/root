let body = document.querySelector("body");

let topNavMenuBtn = document.querySelector(".tnav-menu-btn");
topNavMenuBtn.addEventListener("click", () => {
  topNavMenuBtn.classList.toggle("open");
});

let navbarGridSystem = document.getElementById("navbar-grid-system-div");
let navSearchDiv = document.getElementById("tnav-search-div");
let navMenuLinks = document.getElementById("tnav-menu-links");
let isOpenMenu = false;
topNavMenuBtn.addEventListener("click", function () {
  isOpenMenu = !isOpenMenu;
  if (isOpenMenu == true) {
    navbarGridSystem.classList.remove("navbar-grid-system-1");
    navbarGridSystem.classList.add("navbar-grid-system-2");
    navSearchDiv.classList.remove("d-none");
    navMenuLinks.classList.remove("d-none");
  } else {
    navbarGridSystem.classList.remove("navbar-grid-system-2");
    navbarGridSystem.classList.add("navbar-grid-system-1");
    navSearchDiv.classList.add("d-none");
    navMenuLinks.classList.add("d-none");
  }
});

let termsLinkBtn = document.getElementById("terms-link-btn");
let termsIcon = document.querySelector("#terms-link-btn i");
let termsLinkMenu = document.getElementById("terms-link-menu");

termsIcon.addEventListener("click", () => {
  if (window.outerWidth < 768) {
    if (termsLinkMenu.classList.contains("d-none") == true) {
      termsIcon.classList.remove("rotate-icon-2");
      termsIcon.classList.add("rotate-icon-1");
      termsLinkMenu.classList.remove("d-none");
    } else {
      termsIcon.classList.remove("rotate-icon-1");
      termsIcon.classList.add("rotate-icon-2");
      termsLinkMenu.classList.add("d-none");
    }
  }
});
termsLinkBtn.onmouseover = function () {
  if (window.outerWidth > 768) {
    termsIcon.classList.remove("rotate-icon-2");
    termsIcon.classList.add("rotate-icon-1");
    termsLinkMenu.classList.remove("d-none", "d-md-none");
  }
};
termsLinkBtn.onmouseout = function () {
  if (window.outerWidth > 768) {
    termsIcon.classList.remove("rotate-icon-1");
    termsIcon.classList.add("rotate-icon-2");
    termsLinkMenu.classList.add("d-none", "d-md-none");
  }
};

let btmNavCategoryBtn = document.getElementById("bnav-category-btn");
let btmNavCategoryMenu = document.getElementById("bnav-category-menu");
let btmNavCategoryName = document.getElementById("btn-name");

btmNavCategoryName.addEventListener("click", () => {
  if (btmNavCategoryMenu.classList.contains("d-none") == true) {
    btmNavCategoryMenu.classList.remove("d-none");
  } else {
    btmNavCategoryMenu.classList.add("d-none");
  }
});

// mobile gorunusde categoriya bolmelerinin alt menyularinin acilib baglanmasi
let mobileMenuBtns = document.querySelectorAll(".mobile-menu-btns");
let categoryItemsMenus = document.querySelectorAll(".category-item-menu");
let mobileMenuBtnIcons = document.querySelectorAll(".mobile-menu-btns i");

for (let i = 0; i < mobileMenuBtns.length; i++) {
  (function (index) {
    mobileMenuBtns[i].addEventListener("click", function () {
      if (categoryItemsMenus[index].classList.contains("d-none") == true) {
        categoryItemsMenus[index].classList.remove("d-none");
        mobileMenuBtnIcons[index].classList.remove("rotate-icon-2");
        mobileMenuBtnIcons[index].classList.add("rotate-icon-1");
      } else {
        categoryItemsMenus[index].classList.add("d-none");
        mobileMenuBtnIcons[index].classList.remove("rotate-icon-1");
        mobileMenuBtnIcons[index].classList.add("rotate-icon-2");
      }
    });
  })(i);
}

btmNavCategoryBtn.onmouseover = function () {
  if (window.outerWidth > 768) {
    btmNavCategoryMenu.classList.remove("d-none", "d-md-none");
  }
};
btmNavCategoryBtn.onmouseout = function () {
  if (window.outerWidth > 768) {
    btmNavCategoryMenu.classList.add("d-none", "d-md-none");
  }
};

let categoryItemsBtns = document.querySelectorAll(".category-item");

for (let i = 0; i < categoryItemsBtns.length; i++) {
  (function (index) {
    categoryItemsBtns[i].addEventListener("mouseover", function () {
      if (window.outerWidth > 768) {
        categoryItemsMenus[index].classList.remove("d-none", "d-md-none");
      }
    });
  })(i);
}
for (let i = 0; i < categoryItemsBtns.length; i++) {
  (function (index) {
    categoryItemsBtns[i].addEventListener("mouseout", function () {
      if (window.outerWidth > 768) {
        categoryItemsMenus[index].classList.add("d-none", "d-md-none");
      }
    });
  })(i);
}

// navbarGridSystem
let navbarLogo = document.getElementById("tnav-logo");
let navbarIcons = document.getElementById("tnav-icons");
// navSearchDiv
// navMenuLinks
// btmNavCategoryBtn

window.addEventListener("scroll", function () {
  if (window.outerWidth > 900) {
    if (window.scrollY > 320) {
      navbarGridSystem.removeAttribute("id");
      navbarGridSystem.setAttribute("id", "fixed-navbar-grid-system");
      navbarGridSystem.classList.add("fixed-top");
      navbarGridSystem.style.backgroundColor = "#fc8410";
      navbarGridSystem.style.boxShadow = "0 2px 5px #000";
      navbarLogo.classList.add("d-none");
      navMenuLinks.classList.add("d-md-none");
    } else {
      navbarGridSystem.removeAttribute("id");
      navbarGridSystem.setAttribute("id", "navbar-grid-system-div");
      navbarGridSystem.classList.remove("fixed-top");
      navbarGridSystem.style.backgroundColor = "transparent";
      navbarGridSystem.style.boxShadow = "none";
      navbarLogo.classList.remove("d-none");
      navMenuLinks.classList.remove("d-md-none");
    }
  } else {
    navbarGridSystem.removeAttribute("id");
    navbarGridSystem.setAttribute("id", "navbar-grid-system-div");
    navbarGridSystem.classList.remove("fixed-top");
    navbarGridSystem.style.backgroundColor = "transparent";
    navbarGridSystem.style.boxShadow = "none";
    navbarLogo.classList.remove("d-none");
    navMenuLinks.classList.remove("d-md-none");
  }
});

let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");

body.onscroll = function () {
  if (scrollY > 500) {
    pageUpScrollBtn.classList.remove("d-none");
  } else {
    pageUpScrollBtn.classList.add("d-none");
  }
};

pageUpScrollBtn.onclick = function () {
  window.scrollTo(0, 0);
};

// Range Input
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider .progress");

let priceGap = 200;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal <= 1790) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});


let openFilterPanel1Btn = document.getElementById("open-filter-panel1-btn");
let filterPanel1 = document.getElementById("filter-panel-1");

openFilterPanel1Btn.onclick = function(){
    if(window.outerWidth < 992){
        if(filterPanel1.classList.contains("d-none")==true){
            filterPanel1.classList.remove("d-none"); 
        }else{
            filterPanel1.classList.add("d-none");
        }
    }
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
let navShoppingBtnSpan = document.querySelector("#nav-shopping-btn span");
let navShoppingBtnSpanValue = parseInt(navShoppingBtnSpan.innerHTML);
let productOrderBtns = document.querySelectorAll(".product-order-btn");
let isCheckedProduct = Array(productOrderBtns.length).fill(false);
// Sifaris buttonlarinin sayi qeder mehsul ucun status arrayi yaratdim 
// ve status arrayinin butun elementlerini false olaraq teyin etdim

let productToast = document.getElementById("product-toast");

for(let i = 0; i < productOrderBtns.length; i++){
    (function(index){
        productOrderBtns[i].addEventListener("click",changeSituation);
        
        function changeSituation(){
            if(isCheckedProduct[index]==false){
                navShoppingBtnSpanValue += 1;
                navShoppingBtnSpan.innerHTML = navShoppingBtnSpanValue;
                isCheckedProduct[index] = true;
            }
            const toast = new bootstrap.Toast(productToast);
            toast.show();
        }
    })(i);
}
