/*-----------PAGE SCROLL BUTTON-----------*/
if(document.querySelector(".page-scroll-button")){
    let pageScrollButton = document.querySelector(".page-scroll-button");
    window.addEventListener("scroll",function(){
        if(scrollY > 300){
            pageScrollButton.classList.remove("d-none");
        }else{
            pageScrollButton.classList.add("d-none")
        }
    });
    pageScrollButton.addEventListener("click",function(){
        window.scrollTo(0,0);
    })
}
/*-------------FIXED HEADER-------------*/
if(document.querySelector('header')){
    let mobileNavbar = document.querySelector('nav.mobile-nav');
    let generalNavbar = document.querySelector('nav.general-nav');
    window.addEventListener('scroll',function(){
        if(scrollY > 300){
            mobileNavbar.classList.add('fixed-top');
            generalNavbar.classList.add('fixed-top');
        }else{
            mobileNavbar.classList.remove('fixed-top');
            generalNavbar.classList.remove('fixed-top');
        }
    })
}
// file input
if(document.querySelector(".file-input")){

    let fileInput = document.querySelectorAll(".file-input input");
    let fileButton = document.querySelectorAll(".file-input button");
    let fileSpan = document.querySelectorAll(".file-input span");


    for(let i = 0; i < fileInput.length;i++){
        (function(index){
            fileButton[i].addEventListener("click",function(){
                fileInput[index].click();
            });
            fileInput[i].addEventListener("change",function(){
                fileSpan[index].innerHTML = fileInput[index].value;
            })
        })(i);
    }
}

// worker count
if(document.querySelector('.worker-amount') && document.querySelector('.worker-card')){
    let workerAmountSpan = document.querySelector(".worker-amount .number");
    let workerCard = document.querySelectorAll(".worker-card");
    workerAmountSpan.innerHTML = workerCard.length;
}

//gallery 
if(document.querySelector('.gallery-buttons')){
    let galleryButton = document.querySelectorAll('.gallery-buttons button');
    
    for(let i = 0; i < galleryButton.length; i++){
        (function(index){
            galleryButton[i].addEventListener("click",function(){
                for(let i = 0; i < galleryButton.length; i++){
                    galleryButton[i].classList.remove("active");
                }
                galleryButton[index].classList.add("active")
            })
        })(i);
    }
}
if(document.querySelector('.gallery-buttons button') && document.querySelector('.gallery-panel')){
    let panelButton = document.querySelectorAll('.gallery-buttons button.panel-button');
    let galleryPanel = document.querySelectorAll('.gallery-panel');

    panelButton[0].classList.add('active');
    galleryPanel[0].classList.remove('d-none')

    for(let i = 0; i < panelButton.length; i++){
        (function(index){
            panelButton[i].addEventListener('click',function(){
                if(panelButton.length == galleryPanel.length){
                    for(let i = 0; i < galleryPanel.length; i++){
                        galleryPanel[i].classList.add("d-none");
                    }
                    galleryPanel[index].classList.remove('d-none');
                }
            })
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
                if(scrollY > (counterSpan[index].offsetTop) - 500){
                    statusArray[index] = true;
                }
            })(i);
        }
    });

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
                        startValue += 10;
                        remainder = endValue % 10;
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

if(document.querySelector('footer.bottom .year')){
    let d = new Date();
    document.querySelector('footer.bottom .year').innerHTML = d.getFullYear();
}




/*PAGE NAVIGATION LINKS*/ 
if(document.querySelector(".page-navigation a") && document.querySelector("section.main-section")){
    let pageNavigation = document.querySelectorAll(".page-navigation");
    let mainSection = document.querySelectorAll("section.main-section");

    for(let i = 0; i < pageNavigation.length; i++){
        (function(index){
            let navigationLink = pageNavigation[index].querySelectorAll("a");
            navigationLink[0].classList.add('active')
            for(let k = 0; k < navigationLink.length; k++){
                (function(index_2){
                    navigationLink[k].addEventListener("click",function(e){
                        e.preventDefault();
                        scrollTo(0,(mainSection[index_2].offsetTop - 170));
                        
                        for(let i = 0; i < navigationLink.length; i++){
                            navigationLink[i].classList.remove('active');
                        }
                        navigationLink[index_2].classList.add('active');
                    })
                })(k)
            }
        })(i);
    }
}