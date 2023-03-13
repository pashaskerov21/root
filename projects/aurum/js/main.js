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
/*offcanvas collapse*/
if(document.querySelector(".canvas-links .collapse-button")){
    let canvasCollapseButton = document.querySelectorAll(".canvas-links .collapse-button")
    let canvasLinksChevron = document.querySelectorAll(".canvas-links .collapse-button i");
    for(let i = 0; i < canvasCollapseButton.length; i++){
        (function(index){
            canvasCollapseButton[index].addEventListener("click",function(){
                canvasLinksChevron[index].classList.toggle("rotate-90");
            })
        })(i);
    }
}
/*bottom navbar dropdown*/
if(document.querySelector(".bottom-navbar-dropdown")){
    let dropdownButton = document.querySelectorAll(".bottom-navbar-dropdown .dropdown-button");
    let linksMenu = document.querySelectorAll(".bottom-navbar-dropdown .links-menu");
    let buttonChevron = document.querySelectorAll(".bottom-navbar-dropdown .dropdown-button i");

    for(let i = 0; i < dropdownButton.length; i++){
        (function(index){
            dropdownButton[index].addEventListener("mouseover",function(){
                linksMenu[index].classList.remove("d-none");
                buttonChevron[index].classList.add("rotate-90");
            });
            dropdownButton[index].addEventListener("mouseout",function(){
                linksMenu[index].classList.add("d-none");
                buttonChevron[index].classList.remove("rotate-90");
            });
            linksMenu[index].addEventListener("mouseover",function(){
                linksMenu[index].classList.remove("d-none");
                buttonChevron[index].classList.add("rotate-90");
            });
            linksMenu[index].addEventListener("mouseout",function(){
                linksMenu[index].classList.add("d-none");
                buttonChevron[index].classList.remove("rotate-90");
            });
            
        })(i);
    }
}
/*fixed header*/
if(document.querySelector("header")){
    let mobileNavbar = document.querySelector(".mobile-navbar");
    let bottomNavbar = document.querySelector(".bottom-navbar");

    window.addEventListener("scroll",function(){
        if(scrollY > 350){
            mobileNavbar.classList.add("fixed-top","fixed-navbar");
            bottomNavbar.classList.add("fixed-top","fixed-navbar");
        }else{
            mobileNavbar.classList.remove("fixed-top","fixed-navbar");
            bottomNavbar.classList.remove("fixed-top","fixed-navbar");
        }
    });
}

/*section title*/
if(document.querySelector(".section-title .design-span") && document.querySelector(".section-title .main-span")){
    let mainSpan = document.querySelectorAll(".section-title .main-span");
    let designSpan = document.querySelectorAll(".section-title .design-span");

    for(let i = 0; i < mainSpan.length; i++){
        (function(index){
            let mainSpanValue = mainSpan[index].innerHTML;
            let lowerValue = mainSpanValue.toLocaleLowerCase();
            let upperLetter = lowerValue[0].toLocaleUpperCase();
            let finalValue = upperLetter + lowerValue.slice(1);
            mainSpan[index].innerHTML = finalValue;
            designSpan[index].innerHTML = finalValue;
        })(i);
    }
};

/*mission card*/
if(document.querySelector(".mission-card")){
    let missionCardNumber = document.querySelectorAll(".mission-card .card-number");
    
    for(let i = 0; i < missionCardNumber.length; i++){
        missionCardNumber[i].innerHTML = i + 1;
    }
}


// NUMBER COUNTER
if(document.querySelector(".counter-span")){
    let counterSpan = document.querySelectorAll(".counter-span");
    let statusArray = Array(counterSpan.length).fill(false);

    //let counterSection = document.querySelector(".counter-section");

    window.addEventListener("scroll",function(){
        for(let i = 0; i < counterSpan.length; i++){
            (function(index){
                if(scrollY > (counterSpan[index].offsetTop) - 500){
                    statusArray[index] = true;
                }
            })(i);
        }
    });

    //alert(counterSpan[0].offsetTop + );
    //alert(counterSpan[0].offsetTop + counterSection.offsetTop - 500)
    for(let i = 0; i < counterSpan.length; i++){
        (function(index){
            let startValue = 0;
            let endValue = parseInt(counterSpan[index].getAttribute("data-val"));
            let countSecond = 50;
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
                    counterSpan[index].innerHTML = parseInt(counterSpan[index].getAttribute("data-val"));
                    counterSpan[index].classList.add("end-count");
                }
            },countSecond)
        })(i);
    }
}

/*section animation*/

if(document.querySelector("section")){
    let section = document.querySelectorAll("section");

    window.addEventListener("scroll",function(){
        for(let i = 0; i < section.length; i++){
            (function(index){
                if(scrollY > (section[index].offsetTop - 600)){
                    section[index].classList.add("active");
                }
            })(i);
        }
    })
}



/*service text number*/
if(document.querySelector(".service-content-section-3 .text-number")){
    let serviceTextNumber = document.querySelectorAll(".service-content-section-3 .text-number");
    
    for(let i = 0; i < serviceTextNumber.length; i++){
        serviceTextNumber[i].innerHTML = i + 1;
    }
}


/*gallery buttons*/

if(document.querySelector(".gallery-section .gallery-buttons")){
    let galleryButton = document.querySelectorAll(".gallery-section .gallery-buttons button");
    let galleryPanel = document.querySelectorAll(".gallery-section .gallery-panel");

    for(let i = 0; i < galleryButton.length; i++){
        (function(index){
            galleryButton[i].addEventListener("click",function(){
                if(galleryButton.length == galleryPanel.length){
                    for(let i = 0; i < galleryButton.length; i++){
                        galleryButton[i].classList.remove("active");
                        galleryPanel[i].classList.add("d-none");
                    }
                    
                    galleryButton[index].classList.add("active");
                    galleryPanel[index].classList.remove("d-none");
                }
            })
        })(i);
    }
}


/*gallery foto col margin*/
if(document.querySelector(".gallery-section .row.photo-gallery")){
    let photoCol = document.querySelectorAll(".gallery-section .row.photo-gallery .col-12");
    if(photoCol.length == 3){
        for(let i = 0; i < photoCol.length; i++){
            photoCol[i].classList.add("distance-3");
        }
    }else{
        for(let i = 0; i < photoCol.length; i++){
            photoCol[i].classList.add("distance-6");
        }
    }
}

/*blog page year dropdown*/
if(document.querySelector(".year-dropdown")){
    let yearDropdownButton = document.querySelector(".year-dropdown .active-year");
    let yearMenu = document.querySelector(".year-dropdown .year-menu");
    let yearLink = document.querySelectorAll(".year-dropdown .year-menu a");

    yearDropdownButton.addEventListener("mouseover",function(){
        yearMenu.classList.remove("d-none");
    });
    yearDropdownButton.addEventListener("mouseout",function(){
        yearMenu.classList.add("d-none");
    });
    yearMenu.addEventListener("mouseover",function(){
        yearMenu.classList.remove("d-none");
    });
    yearMenu.addEventListener("mouseout",function(){
        yearMenu.classList.add("d-none");
    });
}

if(document.querySelector(".year-dropdown .active-year") && document.querySelector(".year-dropdown .year-menu button")){
    let activeYear = document.querySelector(".year-dropdown .active-year span");
    let yearButtons = document.querySelectorAll(".year-dropdown .year-menu button");

    for(let i = 0; i < yearButtons.length; i++){
        (function(index){
            yearButtons[i].addEventListener("click",function(){
                for(let k = 0; k < yearButtons.length; k++){
                    yearButtons[k].classList.remove("active");
                }
                yearButtons[index].classList.add("active");
                activeYear.innerHTML = yearButtons[index].innerHTML;
            });
        })(i);
    }
}

/*blog page month swiper button*/
if(document.querySelector(".month-swiper button")){
    let monthButton = document.querySelectorAll(".month-swiper button");

    for(let i = 0; i < monthButton.length; i++){
        (function(index){
            monthButton[i].addEventListener("click",function(){
                for(let k = 0; k < monthButton.length; k++){
                    monthButton[k].classList.remove("active");
                }
                monthButton[index].classList.add("active");
            });
        })(i);
    }
}