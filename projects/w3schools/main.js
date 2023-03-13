// First Navbarın açılıb bağlanması
function openFNMenu(){
    let menubtn = document.querySelector("#f-navbar-menu");
    let downArrow = document.querySelector(".fa-caret-down");
    let upArrow = document.querySelector(".fa-caret-up");
    if(menubtn.className == "fnav-menu-close"){
        menubtn.removeAttribute("class");
        menubtn.setAttribute("class","fnav-menu-open");
        downArrow.setAttribute("id","arrow-dnone");
        upArrow.removeAttribute("id");
    }else{
        menubtn.removeAttribute("class");
        menubtn.setAttribute("class","fnav-menu-close");
        upArrow.setAttribute("id","arrow-dnone");
        downArrow.removeAttribute("id");
    }
    
}
function closeFNavMenu(){
    let menubtn = document.querySelector("#f-navbar-menu");
    menubtn.removeAttribute("class");
    menubtn.setAttribute("class","fnav-menu-close");
}
// First Navbarın ekrana sabitləşdirilməsi
let secondNav = document.querySelector(".second-navbar");
let asidePanel = document.querySelector("aside");
addEventListener("scroll",scrollSNavAside);

function scrollSNavAside(){
    if(window.scrollY > 85){
        secondNav.style.top = 0;
        secondNav.style.position = "fixed";
        asidePanel.style.top = "50px";
        //asidePanel.style.position = "sticky";
    }
    else{
        secondNav.style.position = "relative";
        asidePanel.style.top = "134px";
        //asidePanel.style.position = "relative";
    }
}

// Aside panelinin açılıb bağlanması
function openAsidePanel(){
    let x = document.querySelector("main");
    let y = x.querySelector(".aside-open-panel");

    if(y.style.display === "none"){
        y.style.display = "block";
    }else{
        y.style.display = "none"
    }
    
}

//black panelin acilib baglanmasi
function openTutorialPanel(){
    let t = document.querySelector(".open-fn-tutorial");
    let r = document.querySelector(".open-fn-reference");
    let e = document.querySelector(".open-fn-exercise");
   
    if(t.style.display === "none"){
        t.style.display = "block";
        r.style.display = "none";
        e.style.display = "none";
        
    }else{
        t.style.display = "none";
        
    }
}
function openReferencePanel(){
    let t = document.querySelector(".open-fn-tutorial");
    let r = document.querySelector(".open-fn-reference");
    let e = document.querySelector(".open-fn-exercise");
   
    if(r.style.display === "none"){
        r.style.display = "block";
        t.style.display = "none";
        e.style.display = "none";
    }else{
        r.style.display = "none";
    }
}
function openExercisePanel(){
    let t = document.querySelector(".open-fn-tutorial");
    let r = document.querySelector(".open-fn-reference");
    let e = document.querySelector(".open-fn-exercise");
   
    if(e.style.display === "none"){
        e.style.display = "block";
        t.style.display = "none";
        r.style.display = "none";
    }else{
        e.style.display = "none";
    }
}

function closeTutorialPanel(){
    let t = document.querySelector(".open-fn-tutorial");
    t.style.display = "none";
}
function closeReferencePanel(){
    let r = document.querySelector(".open-fn-reference");
    r.style.display = "none";
}
function closeExercisePanel(){
    let e = document.querySelector(".open-fn-exercise");
    e.style.display = "none";
}