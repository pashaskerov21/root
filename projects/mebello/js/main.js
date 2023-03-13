/*-----------PAGE SCROLL BUTTON-----------*/
if(document.querySelector(".page-scroll-button")){
    let pageScrollButton = document.querySelector(".page-scroll-button");
    window.addEventListener("scroll",function(){
        if(scrollY > 400){
            pageScrollButton.classList.remove("d-none");
        }else{
            pageScrollButton.classList.add("d-none")
        }
    });
    pageScrollButton.addEventListener("click",function(){
        window.scrollTo(0,0);
    })
}

/*---------TOOLBAR---------*/
if(document.querySelector(".phone-toolbar") && document.querySelector(".mobile-toolbar") && document.querySelector(".web-toolbar")){
    let phoneToolbar = document.querySelector(".phone-toolbar");
    let mobileToolbar = document.querySelector(".mobile-toolbar");
    let webToolbar = document.querySelector(".web-toolbar");

    window.addEventListener("scroll",function(){
        if(scrollY > 50){
            phoneToolbar.classList.remove("d-none");
            mobileToolbar.classList.remove("d-none");
            webToolbar.classList.add("d-md-flex");
        }
    });
};


/* ---------------HEADER---------------*/
if(document.querySelector("header")){
    let fixedHeader = document.querySelector("nav.fixed-header");

    window.addEventListener("scroll",function(){
        if(scrollY > 280){
            fixedHeader.classList.remove("d-none");
        }else{
            fixedHeader.classList.add("d-none");
        }
    });
}

/*--------SECTİON HEADER--------*/
if(document.querySelector(".section-header")){
    let mainSpan = document.querySelectorAll(".section-header .main-span");
    let shadowSpan = document.querySelectorAll(".section-header .shadow-span");

    for(let i = 0; i < mainSpan.length; i++){
        (function(index){
            let mainSpanValue = mainSpan[index].innerHTML;
            mainSpan[index].innerHTML = mainSpanValue.toLocaleUpperCase();
            let lowerValue = mainSpanValue.toLocaleLowerCase();
            let upperLetter = lowerValue[0].toLocaleUpperCase();
            let shadowSpanValue = upperLetter + lowerValue.slice(1);
            shadowSpan[index].innerHTML = shadowSpanValue;
        })(i);
    }
}

/*============COUNTERS============*/

// DATE COUNTER
if(document.querySelector(".dates-wrapper")){
    let datesWrapper = document.querySelectorAll(".dates-wrapper");
    let daySpan = document.querySelectorAll(".dates-wrapper .day-span");
    let hourSpan = document.querySelectorAll(".dates-wrapper .hour-span");
    let minuteSpan = document.querySelectorAll(".dates-wrapper .minute-span");
    let secondSpan = document.querySelectorAll(".dates-wrapper .second-span");

    for(let i = 0; i < datesWrapper.length; i++){
        (function(index){
            let countDownFunction = setInterval(function(){
                let date_value = datesWrapper[index].getAttribute("data-time");
                let currentDate = new Date();
                let countDownDate = new Date(date_value);
                
                let distance = countDownDate.getTime() - currentDate.getTime();

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                daySpan[index].innerHTML = days;
                hourSpan[index].innerHTML = hours;
                minuteSpan[index].innerHTML = minutes;
                secondSpan[index].innerHTML = seconds;

                if(distance < 0){
                    clearInterval(countDownFunction);
                    daySpan[index].innerHTML = 0;
                    hourSpan[index].innerHTML = 0;
                    minuteSpan[index].innerHTML = 0;
                    secondSpan[index].innerHTML = 0;
                }
            },1000)            
        })(i);
    }
}

// NUMBER COUNTER
if(document.querySelector(".counter-span")){
    let counterSpan = document.querySelectorAll(".counter-span");
    let statusArray = Array(counterSpan.length).fill(false);

    let counterSection = document.querySelector(".counter-section");

    window.addEventListener("scroll",function(){
        for(let i = 0; i < counterSpan.length; i++){
            (function(index){
                if(scrollY > (counterSpan[index].offsetTop + counterSection.offsetTop) - 500){
                    statusArray[index] = true;
                }
            })(i);
        }
    });

    //alert(counterSpan[0].offsetTop + counterSection.offsetTop - 500)
    for(let i = 0; i < counterSpan.length; i++){
        (function(index){
            let startValue = 0;
            let endValue = parseInt(counterSpan[index].getAttribute("data-val"));
            let countSecond = 10;
            let counter = setInterval(function(){
                if(statusArray[index] == true){
                    if(endValue < 100){
                        startValue += 1;
                    }
                    if(endValue >  100 && endValue < 1000){
                        startValue += 5;
                        remainder = endValue % 5;
                        endValue = endValue - remainder;
                    }
                    if(endValue > 1000){
                        startValue += 25;
                        remainder = endValue % 25;
                        endValue = endValue - remainder;
                    }
                };
                counterSpan[index].innerHTML = startValue;
                if(startValue == endValue){
                    clearInterval(counter);
                    counterSpan[index].innerHTML = parseInt(counterSpan[index].getAttribute("data-val")) + "+";
                    counterSpan[index].classList.add("end-count");
                }
            },countSecond)
        })(i);
    }
}


/* ------------FAVORITE BUTTON------------ */
if((document.querySelector(".favorite-button")) && document.querySelector(".amount-badge.favori")){
    let favoriteButton = document.querySelectorAll(".favorite-button");
    let regularHeart = document.querySelectorAll(".favorite-button .fa-regular.fa-heart");
    let solidHeart = document.querySelectorAll(".favorite-button .fa-solid.fa-heart");

    let favoriteAmountSpan = document.querySelectorAll(".amount-badge.favori");

    for(let i = 0; i < favoriteButton.length; i++){
        (function(index){
            favoriteButton[i].addEventListener("click",function(){
                if(regularHeart[index].classList.contains("d-none")==false){
                    regularHeart[index].classList.add("d-none");
                    solidHeart[index].classList.remove("d-none");
                    for(let k = 0; k < favoriteAmountSpan.length; k++){
                        favoriteAmountSpan[k].innerHTML = parseInt(favoriteAmountSpan[k].innerHTML) + 1;
                    }
                }else{
                    solidHeart[index].classList.add("d-none");
                    regularHeart[index].classList.remove("d-none");
                    if(parseInt(favoriteAmountSpan[0].innerHTML) == 0 &&
                        parseInt(favoriteAmountSpan[1].innerHTML) == 0){
                            favoriteAmountSpan[0].innerHTML = 0;
                            favoriteAmountSpan[1].innerHTML = 0;
                    }else{
                        favoriteAmountSpan[0].innerHTML = parseInt(favoriteAmountSpan[0].innerHTML) - 1;
                        favoriteAmountSpan[1].innerHTML = parseInt(favoriteAmountSpan[1].innerHTML) - 1;
                    }
                }
            })
        })(i);
    }
}
if(document.querySelector("section.favori-products-section")){
    let productCardCol = document.querySelectorAll("section.favori-products-section .col-12.col-sm-6.col-lg-4.col-xl-3");
    let favoriteButton = document.querySelectorAll("section.favori-products-section .product-card .favorite-button");
    let favoriteAmountSpan = document.querySelectorAll(".amount-badge.favori");

    favoriteAmountSpan[0].innerHTML = productCardCol.length;
    favoriteAmountSpan[1].innerHTML = productCardCol.length;

    for(let i = 0; i < favoriteButton.length; i++){
        (function(index){
            favoriteButton[i].addEventListener("click",function(){
                productCardCol[index].remove();
            })
        })(i);
    }
}

/*----------MOBILE FILTER BUTTON----------*/
if(document.querySelector(".open-filters-button")){
    let openFiltersButton = document.querySelector(".open-filters-button");
    let typeFilterForm = document.querySelector(".type-filter-form");

    openFiltersButton.addEventListener("click",function(){
        if(openFiltersButton.classList.contains("active")==false){
            openFiltersButton.classList.add("active");
            typeFilterForm.classList.remove("d-none");
        }else{
            openFiltersButton.classList.remove("active");
            typeFilterForm.classList.add("d-none");
        }
    })
}

/*------FILTER COLLAPSE BUTTON CHEVRON------*/
if(document.querySelector(".filter-collapse-button")){
    let filterCollapseButton = document.querySelectorAll(".filter-collapse-button");
    let chevron2 = document.querySelectorAll(".filter-collapse-button i");

    for(let i = 0; i < filterCollapseButton.length; i++){
        (function(index){
            filterCollapseButton[i].addEventListener("click",function(){
                chevron2[index].classList.toggle("rotate-90");
            })
        })(i);
    };
}

/*-------PRODUCTS PAGE COLOR BUTTON-------*/
if(document.querySelector(".colors-checkbox .c-item label.c-label")){
    let colorLabel = document.querySelectorAll(".colors-checkbox .c-item label.c-label");

    for(let i = 0; i < colorLabel.length; i++){
        (function(index){
            colorLabel[i].addEventListener("click",function(){
                colorLabel[index].classList.toggle("active");
            })
        })(i);
    }
}
// if(document.querySelector(".color-button")){
//     let colorButton = document.querySelectorAll(".color-button");

//     for(let i = 0; i < colorButton.length; i++){
//         (function(index){
//             colorButton[i].addEventListener("click",function(){
//                 for(let i = 0; i < colorButton.length; i++){
//                     colorButton[i].classList.remove("active");
//                 }
//                 colorButton[index].classList.add("active");
//             })
//         })(i);
//     }
// }


/*--------DESCRIPTION BUTTON CHEVRON--------*/
if(document.querySelector(".description-button")){
    let descriptionButton = document.querySelectorAll(".description-button");
    let chevron = document.querySelectorAll(".description-button .fa-chevron-down");

    for(let i = 0; i < descriptionButton.length; i++){
        (function(index){
            descriptionButton[i].addEventListener("click",function(){
                chevron[index].classList.toggle("rotate-180");
            })
        })(i);
    }
}


/*========PRODUCT AMOUNT========*/
if(document.querySelector(".product-amount")){
    let decrementButton = document.querySelectorAll(".product-amount .decrement-button");
    let amountInput = document.querySelectorAll('.product-amount input');
    let incrementButton = document.querySelectorAll(".product-amount .increment-button");

    for(let i = 0; i < amountInput.length; i++){
        (function(index){
            let amountInputValue = parseInt(amountInput[index].value);
            incrementButton[i].addEventListener('click',function(){
                amountInputValue += 1;
                amountInput[index].value = amountInputValue; 
            });
            decrementButton[i].addEventListener('click',function(){
                if(amountInputValue == 1){
                    amountInputValue -= 0;
                    
                }else{
                    amountInputValue -= 1;
                    amountInput[index].value = amountInputValue;
                }
            })
        })(i);
    }
}
/*-------SEBET EDIT-------*/
if(document.querySelector(".basket-table")){
    let productInitialPrice = document.querySelectorAll(".product-initial-price span");
    let productFinalPrice = document.querySelectorAll(".product-final-price span");

    let decrementButton = document.querySelectorAll(".product-amount .decrement-button");
    let amountInput = document.querySelectorAll('.product-amount input');
    let incrementButton = document.querySelectorAll(".product-amount .increment-button");

    for(let i = 0; i < productFinalPrice.length; i++){
        (function(index){
            let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
            let amountInputValue = parseInt(amountInput[index].value);
            let finalValue = initialPriceValue * amountInputValue;
            productFinalPrice[index].innerHTML = finalValue.toFixed(2);
        })(i);
    };
    for(let i = 0; i < incrementButton.length; i++){
        (function(index){
            incrementButton[i].addEventListener("click",function(){
                let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
                let amountInputValue = parseInt(amountInput[index].value);
                let finalValue = initialPriceValue * amountInputValue;
                productFinalPrice[index].innerHTML = finalValue.toFixed(2);
            });
        })(i);
    }
    for(let i = 0; i < decrementButton.length; i++){
        (function(index){
            decrementButton[i].addEventListener("click",function(){
                let initialPriceValue = parseFloat(productInitialPrice[index].innerHTML);
                let amountInputValue = parseInt(amountInput[index].value);
                let finalPriceValue = parseFloat(productFinalPrice[index].innerHTML);
                
                if(amountInputValue == 1){
                    productFinalPrice[index].innerHTML = productInitialPrice[index].innerHTML;
                }else{
                    let finalValue = finalPriceValue - initialPriceValue;
                    productFinalPrice[index].innerHTML = finalValue.toFixed(2);
                }

            })
        })(i);
    };
    
    let productRow = document.querySelectorAll(".basket-table .product-row");
    let productDeleteButton = document.querySelectorAll(".product-delete-button");
    for(let i = 0; i < productDeleteButton.length; i++){
        (function(index){
            productDeleteButton[i].addEventListener("click",function(){
                productRow[index].remove();
            })
        })(i);
    }
}

/*-----BASKET BUTTON-----*/
if(document.querySelectorAll(".basket-button-2") && document.querySelector(".amount-badge.basket")){
    let basketButton_2 = document.querySelectorAll(".basket-button-2");
    let basketAmountSpan = document.querySelectorAll(".amount-badge.basket");
    let basketToast = document.querySelector(".basket-toast");
    for(let i = 0; i < basketButton_2.length; i++){
        (function(index){
            basketButton_2[i].addEventListener("click",function(){
                if(basketButton_2[index].classList.contains("active")==false){
                    basketButton_2[index].classList.add("active");
                    for(let k = 0; k < basketAmountSpan.length; k++){
                        basketAmountSpan[k].innerHTML = parseInt(basketAmountSpan[k].innerHTML) + 1;
                    };
                    
                }
            });
        })(i);
    };
};


/*PRODUCT PAGE COLOR BUTTON*/ 
if(document.querySelector(".color-item")){
    let colorItems = document.querySelectorAll(".color-item");

    for(let i = 0; i < colorItems.length; i++){
        (function(index){
            colorItems[i].addEventListener("click",function(){
                for(let i = 0; i < colorItems.length;i++){
                    colorItems[i].classList.remove("active");
                }
                colorItems[index].classList.add("active")
            })
        })(i);
    };
}

/*-------form buttons row-------*/
if(document.querySelector(".form-buttons-row")){
    let rowButtons = document.querySelectorAll(".form-buttons-row .button");
    
    rowButtons[0].addEventListener("click",function(){
        rowButtons[1].classList.remove("active");
        rowButtons[0].classList.add("active");
    });
    rowButtons[1].addEventListener("click",function(){
        rowButtons[0].classList.remove("active");
        rowButtons[1].classList.add("active");
    });
    rowButtons[2].addEventListener("click",function(){
        rowButtons[3].classList.remove("active");
        rowButtons[2].classList.add("active");
    });
    rowButtons[3].addEventListener("click",function(){
        rowButtons[2].classList.remove("active");
        rowButtons[3].classList.add("active");
    });
}
if(document.querySelector('.payment-card-info')){
    let firstButton = document.querySelector('.form-buttons-row.payment .button:first-child');
    let lastButton = document.querySelector('.form-buttons-row.payment .button:last-child');
    let paymentCardInfo = document.querySelector('.payment-card-info');
    firstButton.addEventListener('click',function(){
        paymentCardInfo.classList.add('d-none');
    })
    lastButton.addEventListener('click',function(){
        paymentCardInfo.classList.remove('d-none');
    })
}





/*-------CONTACT PAGE-------*/
if(document.querySelector(".filial-collapse-button")){
    let filialCollapseButton = document.querySelector(".filial-collapse-button");
    filialCollapseButton.addEventListener("click",function(){
        if(filialCollapseButton.classList.contains("active")==false){
            filialCollapseButton.classList.add("active");
        }else{
            filialCollapseButton.classList.remove("active");
        }
    });
    let collapseButtonName = document.querySelector(".filial-collapse-button span");
    let filialItems = document.querySelectorAll("#filial-collapse .filial-items .filial-name");
    let filialCollapse = document.getElementById("filial-collapse");
    let filialContainer = document.querySelectorAll(".filial-container");

    for(let i = 0; i < filialItems.length; i++){
        (function(index){
            filialItems[i].addEventListener("click",function(){
                collapseButtonName.innerHTML = filialItems[index].innerHTML;
                filialCollapseButton.classList.add("collapsed");
                filialCollapse.classList.remove("show");

                for(let i = 0; i < filialContainer.length; i++){
                    filialContainer[i].classList.remove("active");
                };
                filialContainer[index].classList.add("active");
            })
        })(i);
    };
};


if(document.querySelector(".room-category-swiper")){
    let roomCategorySwiper = document.querySelector(".room-category-swiper");
    setInterval(function(){
        roomCategorySwiper.classList.toggle("version-2");
    },1000)
}

/*section animation*/
// if(document.querySelector("section")){
//     let section = document.querySelectorAll("section");

//     window.addEventListener("scroll",function(){
//         for(let i = 0; i < section.length; i++){
//             (function(index){
//                 if(scrollY > (section[index].offsetTop - 600)){
//                     section[index].classList.add("active");
//                 }
//             })(i);
//         }
//     })
// }


/*price range wrapper*/
if(document.querySelector(".range-wrapper")){
    const rangeInput = document.querySelectorAll(".range-input input");
    const priceInput = document.querySelectorAll(".price-input input");
    const progress = document.querySelector(".slider .progress");
    
    if(rangeInput[0].min == rangeInput[1].min && rangeInput[0].max == rangeInput[1].max){
        rangeInput[0].value = rangeInput[0].min;
        rangeInput[1].value = rangeInput[1].max;
        priceInput[0].value = rangeInput[0].value;
        priceInput[1].value = rangeInput[1].value;
    }
    
    rangeInput.forEach(input =>{
        input.addEventListener("input", () =>{
            let minVal = parseInt(rangeInput[0].value);
            let maxVal = parseInt(rangeInput[1].value);

            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;

            
        })
    });

    priceInput.forEach(input =>{
        input.addEventListener("input", () =>{
            let minVal = parseInt(priceInput[0].value);
            let maxVal = parseInt(priceInput[1].value);

            rangeInput[0].value = minVal;
            rangeInput[1].value = maxVal;
                        
        })
    })
};

