let leftCategoryPanelButton = document.querySelectorAll(".category-button");
let leftCategoryPanel = document.querySelectorAll(".category-left-panel");

for(let i = 0; i < leftCategoryPanelButton.length; i++){
    (function(index){
        leftCategoryPanelButton[i].addEventListener("mouseover",function(){
            leftCategoryPanel[index].classList.remove("d-none");
        });
        leftCategoryPanelButton[i].addEventListener("mouseout",function(){
            leftCategoryPanel[index].classList.add("d-none");
        });
    })(i);
};


let filterItem = document.querySelectorAll(".filters-wrapper .filter-item");
let filterItemChevron = document.querySelectorAll(".filters-wrapper .filter-item .chevron i");
for(let i = 0; i < filterItem.length;i++){
    (function(index){
        filterItem[i].addEventListener("click",function(){
            if(filterItem[index].classList.contains("status-close")==false){
                filterItem[index].classList.add("status-close");
                filterItemChevron[index].classList.remove("rotate-up-180");
                filterItemChevron[index].classList.add("rotate-down-180");
            }else{
                filterItem[index].classList.remove("status-close");
                filterItemChevron[index].classList.remove("rotate-down-180");
                filterItemChevron[index].classList.add("rotate-up-180");
            }
        })
    })(i);
}


// Range Input
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider .progress");

let priceGap = 20;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal <= 200) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Filter buttons
let filterButtons = document.querySelectorAll(".filters-wrapper .filter-button");
for(let i = 0; i < filterButtons.length; i++){
    (function(index){
        filterButtons[i].addEventListener("click",function(){
            filterButtons[index].classList.toggle("active")
        })
    })(i);
};

let resetButton = document.querySelector(".filters-wrapper .reset-button");
resetButton.addEventListener("click",function(){
    for(let i = 0; i < filterButtons.length; i++){
        filterButtons[i].classList.remove("active");
    }
});



let listButton = document.querySelector(".right-filters .list-button");
let cellButton = document.querySelector(".right-filters .cell-button");

let productsWrapper = document.querySelector(".products-wrapper");
let productCol = document.querySelectorAll(".products-wrapper .product-col");
let productCard = document.querySelectorAll(".products-wrapper .product-card");
let basketButtonInner = document.querySelectorAll(".products-wrapper .product-button.basket .button-inner");
let basketButtonInner2 = document.querySelectorAll(".products-wrapper .product-button.basket .button-inner-remastered");
let compareButtonInner = document.querySelectorAll(".products-wrapper .product-button.compare span");

listButton.addEventListener("click",function(){
    cellButton.classList.remove("active");
    listButton.classList.add("active");
    productsWrapper.classList.add("remastered");
    for(let i = 0; i < productCol.length; i++){
        productCol[i].classList.remove("col-md-6","col-xl-4");
        productCard[i].classList.add("remastered");
        basketButtonInner[i].classList.add("d-none");
        basketButtonInner2[i].classList.remove("d-none");
        compareButtonInner[i].classList.add("d-none");
    };
});
cellButton.addEventListener("click",function(){
  listButton.classList.remove("active");
  cellButton.classList.add("active");
  productsWrapper.classList.remove("remastered");
  for(let i = 0; i < productCol.length; i++){
      productCol[i].classList.add("col-md-6","col-xl-4");
      productCard[i].classList.remove("remastered");
      basketButtonInner2[i].classList.add("d-none");
      basketButtonInner[i].classList.remove("d-none");
      compareButtonInner[i].classList.remove("d-none");
  };
});


