/* ---------------HEADER---------------*/
if(document.querySelector("header")){
    let mobileHeader = document.querySelector("nav.mobile-navbar");
    let generalHeader = document.querySelector("nav.general-header");

    window.addEventListener("scroll",function(){
        if(scrollY > 280){
            mobileHeader.classList.add("fixed-top");
            generalHeader.classList.add("fixed-top","fixed-navbar");
        }else{
            mobileHeader.classList.remove("fixed-top");
            generalHeader.classList.remove("fixed-top","fixed-navbar");
        }
    });
}

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

/*PAGE NAVIGATION LINKS*/ 
if(document.querySelector(".page-navigation a") && document.querySelector("section.main-section")){
    let pageNavigation = document.querySelectorAll(".page-navigation");
    let mainSection = document.querySelectorAll("section.main-section");

    for(let i = 0; i < pageNavigation.length; i++){
        (function(index){
            let navigationLink = pageNavigation[index].querySelectorAll("a");
            for(let k = 0; k < navigationLink.length; k++){
                (function(index_2){
                    navigationLink[k].addEventListener("click",function(e){
                        e.preventDefault();
                        scrollTo(0,(mainSection[index_2].offsetTop - 150));
                    })
                })(k)
            }
        })(i);
    }
}

// NUMBER COUNTER
if(document.querySelector(".counter-span")){
    let counterSpan = document.querySelectorAll(".counter-span");
    let statusArray = Array(counterSpan.length).fill(false);


    window.addEventListener("scroll",function(){
        for(let i = 0; i < counterSpan.length; i++){
            (function(index){
                if(scrollY > (counterSpan[index].offsetTop - 500)){
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


/*contact dropdown*/
if(document.querySelector(".contact-dropdown") && document.querySelector(".contact-dropdown .address-menu")){
    let activeButton = document.querySelector(".contact-dropdown .active-button");
    let addressMenu = document.querySelector(".contact-dropdown .address-menu");

    activeButton.addEventListener("mouseover",function(){
        addressMenu.classList.remove("d-none");
    });
    activeButton.addEventListener("mouseout",function(){
        addressMenu.classList.add("d-none");
    });
    addressMenu.addEventListener("mouseover",function(){
        addressMenu.classList.remove("d-none");
    });
    addressMenu.addEventListener("mouseout",function(){
        addressMenu.classList.add("d-none");
    });

}

if(document.querySelector(".contact-dropdown .address-menu button") && document.querySelector(".address-row")){
    let activeButtonSpan = document.querySelector(".contact-dropdown .active-button span");
    let addressMenuButton = document.querySelectorAll(".contact-dropdown .address-menu button");
    let addressRow = document.querySelectorAll(".address-row");
    let addressMenu = document.querySelector(".contact-dropdown .address-menu");
    let contactSection = document.querySelector(".contact-section");

    if(addressMenuButton.length == addressRow.length){
        for(let i = 0; i < addressMenuButton.length; i++){
            (function(index){
                addressMenuButton[i].addEventListener("click",function(){
                    for(let k = 0; k < addressMenuButton.length; k++){
                        addressMenuButton[k].classList.remove("active");
                        addressRow[k].classList.add("d-none")
                    }
                    addressMenu.classList.add("d-none")
                    addressMenuButton[index].classList.add("active");
                    activeButtonSpan.innerHTML = addressMenuButton[index].innerHTML;
                    addressRow[index].classList.remove("d-none");
                    scrollTo(0,(contactSection.offsetTop - 200))
                }) 

            })(i);
        }
    }
}