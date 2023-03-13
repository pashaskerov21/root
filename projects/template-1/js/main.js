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
    let mobileNavbar = document.querySelector('nav.mobile-navbar');
    let generalNavbar = document.querySelector('nav.general-navbar');
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
/*PAGE NAVIGATION LINKS*/ 
if(document.querySelector(".page-navigation a") && document.querySelector("section.main-section")){
    let pageNavigation = document.querySelectorAll(".page-navigation");
    let mainSection = document.querySelectorAll("section.main-section");

    for(let i = 0; i < pageNavigation.length; i++){
        (function(index){
            let navigationLink = pageNavigation[index].querySelectorAll("a");
            //navigationLink[0].classList.add('select')
            for(let k = 0; k < navigationLink.length; k++){
                (function(index_2){
                    navigationLink[k].addEventListener("click",function(e){
                        e.preventDefault();
                        scrollTo(0,(mainSection[index_2].offsetTop - 170));
                        
                        for(let i = 0; i < navigationLink.length; i++){
                            navigationLink[i].classList.remove('select');
                        }
                        navigationLink[index_2].classList.add('select');
                    })
                })(k)
            }
        })(i);
    }
}

if(document.querySelector('#mobile-menu .menu-links a')){
    let menuButton = document.querySelectorAll('.menu-button');
    let closeButton = document.querySelector('#mobile-menu .offcanvas-header .close-button');
    let menuLinks = document.querySelectorAll('#mobile-menu .menu-links a');

    for(let i = 0; i < menuButton.length; i++){
        menuButton[i].addEventListener('click',function(){
            let delay = 0;
            for(let i = 0; i < menuLinks.length; i++){
                menuLinks[i].classList.add('active');
                menuLinks[i].style.animationDelay = delay + 's';
                delay = delay + 0.15;
            }
        });
    }
    closeButton.addEventListener('click',function(){
        for(let i = 0; i < menuLinks.length; i++){
            menuLinks[i].classList.remove('active');
        }
    })
}

if(document.querySelector('.general-navbar .nav-links a')){
    let generalNavLinks = document.querySelectorAll('.general-navbar .nav-links a');
    let delay = 0;
    for(let i = 0; i < generalNavLinks.length; i++){
        generalNavLinks[i].style.animationDelay = delay + 's';
        delay = delay + 0.15;
    }
}

if(document.querySelector('.header-time-counter .date-item')){
    let dateItem = document.querySelectorAll('.header-time-counter .date-item');
    let delay = 0;
    for(let i = 0; i < dateItem.length; i++){
        dateItem[i].style.animationDelay = delay + 's';
        delay = delay + 0.15;
    }
}

if(document.querySelector('.time-counter')){
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let dd = document.getElementById('dd');
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let day_dot = document.querySelector('.day_dot');
    let hr_dot = document.querySelector('.hr_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');

    let timeCounter = document.querySelector('.time-counter');

    let endDate = timeCounter.getAttribute('data-time');

    let x = setInterval(function(){
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;

        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let s = Math.floor((distance % (1000 * 60)) / (1000));

        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;

        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;

        day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
        hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
        min_dot.style.transform = `rotateZ(${m * 6}deg)`;
        sec_dot.style.transform = `rotateZ(${s * 6}deg)`;

        if(distance < 0){
            clearInterval(x);
            timeCounter.style.display = 'none';
        }
    })
}

if(document.querySelector('.product-card .price')){
    let productPrice = document.querySelectorAll('.product-card .price');
    for(let i = 0; i < productPrice.length; i++){
        (function(index){
            let priceSpan = productPrice[index].querySelectorAll('span');
            if(priceSpan.length ==1){
                priceSpan[0].setAttribute('class','true-price');
            }
            if(priceSpan.length == 2){
                priceSpan[0].style.textDecoration = 'line-through';
                priceSpan[1].style.color = '#d93c3c';
                priceSpan[1].setAttribute('class','true-price');
            }
        })(i);
    }
}

if(document.querySelector('.team-card .sosial-icons a')){
    let sosialIcon = document.querySelectorAll('.team-card .sosial-icons');
    
    for(let i = 0; i < sosialIcon.length; i++){
        (function(index){
            let sosialLink = sosialIcon[index].querySelectorAll('a');
            let delay = 0;
            for(let k = 0; k < sosialLink.length; k++){
                sosialLink[k].style.animationDelay = delay + 's';
                delay = delay + 0.15;
            }
        })(i);
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