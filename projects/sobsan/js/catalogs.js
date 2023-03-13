let catalogButtons = document.querySelectorAll(".catalog-buttons button");
for(let i = 0; i < catalogButtons.length; i++){
    (function(index){
        catalogButtons[i].addEventListener("click",function(){
            for(let i = 0; i < catalogButtons.length; i++){
                catalogButtons[i].classList.remove("active");
            }
            catalogButtons[index].classList.add("active");

        })
    })(i);
}


let colorButton = document.querySelectorAll(".color-button");
let shadesWrapper = document.querySelectorAll(".shades-wrapper");
for(let i = 0; i < colorButton.length;i++){
    (function(index){
        colorButton[i].addEventListener("click",function(){
            if(shadesWrapper[index].classList.contains("d-none")==true){
                for(let i = 0; i < shadesWrapper.length;i++){
                    shadesWrapper[i].classList.add("d-none");
                };
                shadesWrapper[index].classList.remove("d-none");
            }else{
                shadesWrapper[index].classList.add("d-none")
            }
        })
    })(i);
};