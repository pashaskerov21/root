// BASKET BUTTON
let basketButton = document.querySelectorAll(".product-button.basket");
let enabledBasketButton = document.querySelectorAll(".product-button.basket .enabled");
let disabledBasketButton = document.querySelectorAll(".product-button.basket .disabled");

let basketCounterSpan = document.querySelector(".toolbar-card .basket-counter");
let basketCounterValue = parseInt(basketCounterSpan.innerHTML);

for(let i = 0; i < basketButton.length; i++){
    (function(index){
        basketButton[i].addEventListener("click",function(){
            if(enabledBasketButton[index].classList.contains("d-none")==true){
                disabledBasketButton[index].classList.add("d-none");
                enabledBasketButton[index].classList.remove("d-none");
                basketButton[index].classList.add("active");

                basketCounterValue += 1;
                basketCounterSpan.innerHTML = basketCounterValue;
            }else{
                enabledBasketButton[index].classList.add("d-none");
                basketButton[index].classList.remove("active");
                disabledBasketButton[index].classList.remove("d-none");

                basketCounterValue -= 1;
                basketCounterSpan.innerHTML = basketCounterValue;
            }
        })
    })(i);
};

// COMPARE BUTTON
let compareButton = document.querySelectorAll(".product-button.compare");
let whiteCompareIcon = document.querySelectorAll(".product-button.compare .compare-white");
let redCompareIcon = document.querySelectorAll(".product-button.compare .compare-red");

let compareCounterSpan = document.querySelector(".toolbar-card .compare-counter");
let compareCounterValue = parseInt(compareCounterSpan.innerHTML);

for(let i = 0; i < compareButton.length; i++){
    (function(index){
        compareButton[i].addEventListener("click",function(){
            if(whiteCompareIcon[index].classList.contains("d-none")==true){
                redCompareIcon[index].classList.add("d-none");
                whiteCompareIcon[index].classList.remove("d-none");
                compareButton[index].classList.add("active");

                compareCounterValue += 1;
                compareCounterSpan.innerHTML = compareCounterValue;
            }else{
                whiteCompareIcon[index].classList.add("d-none");
                compareButton[index].classList.remove("active");
                redCompareIcon[index].classList.remove("d-none");
                
                compareCounterValue -= 1;
                compareCounterSpan.innerHTML = compareCounterValue;
            }
        })
    })(i);
};

// FAVORITE BUTTON 
let favoriteButton = document.querySelectorAll(".product-button.favorite");
let fullFavoriteIcon = document.querySelectorAll(".product-button.favorite .favorite-full");
let whiteFavoriteIcon = document.querySelectorAll(".product-button.favorite .favorite-white");

let favoriteCounterSpan = document.querySelector(".toolbar-card .favorite-counter");
let favoriteCounterValue = parseInt(compareCounterSpan.innerHTML);

for(let i = 0; i < favoriteButton.length; i++){
    (function(index){
        favoriteButton[i].addEventListener("click",function(){
            if(fullFavoriteIcon[index].classList.contains("d-none")==true){
                whiteFavoriteIcon[index].classList.add("d-none");
                fullFavoriteIcon[index].classList.remove("d-none");

                favoriteCounterValue += 1;
                favoriteCounterSpan.innerHTML = favoriteCounterValue;
            }else{
                fullFavoriteIcon[index].classList.add("d-none");
                whiteFavoriteIcon[index].classList.remove("d-none");
                
                favoriteCounterValue -= 1;
                favoriteCounterSpan.innerHTML = favoriteCounterValue;
            }
        })
    })(i);
};


