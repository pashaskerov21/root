let productList = document.querySelectorAll(".lists-wrapper.product");
let removeButton = document.querySelectorAll(".lists-wrapper.product .remove-button");

let compareCounterSpan = document.querySelector(".toolbar-card .compare-counter");
let compareCounterValue = parseInt(compareCounterSpan.innerHTML);

compareCounterValue = productList.length;
compareCounterSpan.innerHTML = compareCounterValue;

for(let i = 0; i < removeButton.length;i++){
    (function(index){
        removeButton[i].addEventListener("click",function(){
            productList[index].classList.add("d-none");
            compareCounterValue -= 1;
            compareCounterSpan.innerHTML = compareCounterValue;
        });
    })(i);
};

let removeAllButton = document.querySelector(".remove-all-button");

removeAllButton.addEventListener("click",function(){
    for(let i = 0; i < productList.length; i++){
        productList[i].classList.add("d-none");
    }
    compareCounterSpan.innerHTML = 0;
});

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