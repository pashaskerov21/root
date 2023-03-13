/* ---------------HEADER---------------*/
if(document.querySelector("header")){
    /*fix header*/
    let mobileHeader = document.querySelector(".mobile-header");
    let generalHeader = document.querySelector(".general-header .bottom-navbar");
    let generalHeaderLogo = document.querySelector(".general-header .bottom-navbar .header-logo");

    window.addEventListener("scroll",function(){
        if(scrollY > 300){
            mobileHeader.classList.add("fix-header","fixed-top");
            generalHeader.classList.add("fix-header","fixed-top");
            generalHeaderLogo.classList.remove("d-none");
        }else{
            mobileHeader.classList.remove("fix-header","fixed-top");
            generalHeader.classList.remove("fix-header","fixed-top");
            generalHeaderLogo.classList.add("d-none");
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

/*------------PAGE MAIN BUTTONS------------*/
if(document.querySelector(".page-button")){
    let pageButtons = document.querySelectorAll(".page-button");
    for(let i = 0; i < pageButtons.length; i++){
        (function(index){
            pageButtons[i].addEventListener("click",function(){
                if(pageButtons[index].classList.contains("active")==false){
                    pageButtons[index].classList.add("active");
                }else{
                    pageButtons[index].classList.remove("active")
                }
            })
        })(i);
    }
}

/*----------------COUNTERS----------------*/
if(document.querySelector(".counter-span")){
    let reportSpan = document.querySelectorAll(".counter-span");
    let statusArray = Array(reportSpan.length).fill(false);

    window.addEventListener("scroll",function(){
        for(let i = 0; i < reportSpan.length; i++){
            (function(index){
                if(scrollY > reportSpan[index].offsetTop - 500){
                    statusArray[index] = true;
                }
            })(i);
        }
    });

    for(let i = 0; i < reportSpan.length; i++){
        (function(index){
            let startValue = 0;
            let endValue = parseInt(reportSpan[index].getAttribute("data-val"));
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
                reportSpan[index].innerHTML = startValue;
                if(startValue == endValue){
                    clearInterval(counter);
                    reportSpan[index].innerHTML = parseInt(reportSpan[index].getAttribute("data-val")) + "+";
                }
            },countSecond)
        })(i);
    }
}

/*------------TRAININGS GRIDDER------------*/
if(document.querySelector(".trainings-section")){
    let trainingSection = document.querySelector(".trainings-section");
    if(trainingSection.querySelector(".general-trainings-swiper")){
        let categoryCard = document.querySelectorAll(".trainings-gridder .category-card");
        let gridderContent = document.querySelectorAll(".trainings-gridder .gridder-content");
        let gridderCloseButton = document.querySelectorAll(".trainings-gridder .close-button");
        let generalWrapper = document.querySelector(".trainings-section .general-wrapper");
        let swiperPaginationBullets = document.querySelectorAll(".general-trainings-swiper .general-pagination .swiper-pagination-bullet");

        for(let i = 0; i < categoryCard.length; i++){
            (function(index){
                categoryCard[i].addEventListener("click",function(){
                    for(let i = 0; i < gridderContent.length; i++){
                        gridderContent[i].classList.remove("show");
                    };
                    gridderContent[index].classList.add("show");
                    let gridderContentTopPosition = generalWrapper.offsetTop + gridderContent[index].offsetTop;
                    window.scrollTo(0,gridderContentTopPosition - 150);
                });
                gridderCloseButton[i].addEventListener("click",function(){
                    gridderContent[index].classList.remove("show");
                    let categoryCardTopPosition = generalWrapper.offsetTop + categoryCard[index].offsetTop;
                    window.scrollTo(0,categoryCardTopPosition - 150);
                })
            })(i);
        };
        for(let i = 0; i < swiperPaginationBullets.length; i++){
            swiperPaginationBullets[i].addEventListener("click",function(){
                if(swiperPaginationBullets[i].classList.contains("swiper-pagination-bullet-active")==false){
                    for(let i = 0; i < gridderContent.length; i++){
                        gridderContent[i].classList.remove("show");
                    };
                    window.scrollTo(0, generalWrapper.offsetTop);
                }
            });
        }
    }else{
        let categoryCard = document.querySelectorAll(".trainings-gridder .category-card");
        let gridderContent = document.querySelectorAll(".trainings-gridder .gridder-content");
        let gridderCloseButton = document.querySelectorAll(".trainings-gridder .close-button");

        for(let i = 0; i < categoryCard.length; i++){
            (function(index){
                categoryCard[i].addEventListener("click",function(){
                    for(let i = 0; i < gridderContent.length; i++){
                        gridderContent[i].classList.remove("show");
                    };
                    gridderContent[index].classList.add("show");
                    window.scrollTo(0,gridderContent[index].offsetTop - 150);
                });
                gridderCloseButton[i].addEventListener("click",function(){
                    gridderContent[index].classList.remove("show");
                    window.scrollTo(0,categoryCard[index].offsetTop - 150);
                })
            })(i);
        };
    }
}

/*----------------TRAINER CARD----------------*/
if(document.querySelector(".trainer-card")){
    let shareButton = document.querySelectorAll(".trainer-card .share-button");
    let hideIcons = document.querySelectorAll(".trainer-card .hide-icons");
    for(let i = 0; i < shareButton.length; i++){
        (function(index){
            shareButton[i].addEventListener("click",function(){
                hideIcons[index].classList.toggle("active");
            });
        })(i);
    };
};

/*---------------GALLERY BUTTONS---------------*/
if(document.querySelector(".gallery-buttons")){
    let gallerButtons = document.querySelectorAll(".gallery-buttons button");
    let galleryWrapper = document.querySelectorAll(".gallery-wrapper");

    for(let i = 0; i < gallerButtons.length; i++){
        (function(index){
            gallerButtons[i].addEventListener("click",function(){
                for(let i = 0; i < gallerButtons.length; i++){
                    gallerButtons[i].classList.remove("active")
                    galleryWrapper[i].classList.remove("active");
                }
                gallerButtons[index].classList.add("active");
                galleryWrapper[index].classList.add("active");
            })
        })(i);
    };
} 

if(document.querySelector(".page-header .root-links a")){
    let rootLinks = document.querySelectorAll(".page-header .root-links a");
    for(let i = 0; i < rootLinks.length; i++){
        let linkValue = rootLinks[i].innerHTML;
        let lowerValue = linkValue.toLocaleLowerCase();
        let upperLetter = lowerValue[0].toLocaleUpperCase();
        rootLinks[i].innerHTML = upperLetter + lowerValue.slice(1);
    }
}
