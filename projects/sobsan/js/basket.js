let basketCounterSpan = document.querySelector(".toolbar-card .basket-counter");
let basketCounterValue = parseInt(basketCounterSpan.innerHTML);
let productRow = document.querySelectorAll(".basket-table .product-row");
basketCounterValue = productRow.length;
basketCounterSpan.innerHTML = basketCounterValue;

let productPrice = document.querySelectorAll(".basket-table .product-price");
let productAmount = document.querySelectorAll(".basket-table .cp-number");
let decrementButton = document.querySelectorAll(".basket-table .decrement-button");
let incrementButton = document.querySelectorAll(".basket-table .increment-button");
let totalProductPrice = document.querySelectorAll(".basket-table .product-total-price");

let totalSum = document.querySelector(".total-sum");

for(let i = 0; i < productPrice.length;i++){
    (function(index){
        
        let productPriceValue = parseFloat(productPrice[index].innerHTML);
        let productAmountValue = parseInt(productAmount[index].innerHTML);
        let totalProductValue = (productPriceValue * productAmountValue).toFixed(2);
        totalProductPrice[index].innerHTML = totalProductValue + " AZN";
        let totalSumValue = 0;
        for(let i = 0; i < totalProductPrice.length; i++){
            totalSumValue += parseFloat(totalProductPrice[i].innerHTML);
        };
        totalSum.innerHTML = totalSumValue.toFixed(2) + " AZN";
    })(i);
};

for(let i = 0; i < incrementButton.length; i++){
    (function(index){
        incrementButton[i].addEventListener("click",function(){
            let productAmountValue = parseInt(productAmount[index].innerHTML);
            productAmountValue += 1;
            productAmount[index].innerHTML = productAmountValue;

            let productPriceValue = parseFloat(productPrice[index].innerHTML);
            let totalProductValue = (productPriceValue * productAmountValue).toFixed(2);
            totalProductPrice[index].innerHTML = totalProductValue + " AZN";
            let totalSumValue = 0;
            for(let i = 0; i < totalProductPrice.length; i++){
                totalSumValue += parseFloat(totalProductPrice[i].innerHTML);
            };
            totalSum.innerHTML = totalSumValue.toFixed(2) + " AZN";

        });
    })(i);
}
for(let i = 0; i < decrementButton.length; i++){
    (function(index){
        decrementButton[i].addEventListener("click",function(){
            let productAmountValue = parseInt(productAmount[index].innerHTML);
            if(productAmountValue == 1){
                productAmount[index].innerHTML = 1;
            }else{
                productAmountValue -= 1;
                productAmount[index].innerHTML = productAmountValue
            }
            let totalProductValue = parseFloat(totalProductPrice[index].innerHTML);
            let productPriceValue = parseFloat(productPrice[index].innerHTML);
            let total_value_1 = (totalProductValue - productPriceValue).toFixed(2);
            if(productAmountValue == 1){
                totalProductPrice[index].innerHTML = productPrice[index].innerHTML;
            }else{
                totalProductPrice[index].innerHTML = total_value_1 + " AZN";
            }
            let totalSumValue = 0;
            for(let i = 0; i < totalProductPrice.length; i++){
                totalSumValue += parseFloat(totalProductPrice[i].innerHTML);
            };
            totalSum.innerHTML = totalSumValue.toFixed(2) + " AZN";

        });
    })(i);
}


let removeButton = document.querySelectorAll(".basket-table .remove-button");


for(let i = 0; i < removeButton.length; i++){
    (function(index){
        removeButton[i].addEventListener("click",function(){
            productRow[index].classList.add("d-none");
            basketCounterValue -= 1;
            basketCounterSpan.innerHTML = basketCounterValue;
            let totalSumValue = parseFloat(totalSum.innerHTML);
            let totalProductValue = parseFloat(totalProductPrice[index].innerHTML);
            let new_total_value = (totalSumValue - totalProductValue).toFixed(2);
            totalSum.innerHTML = new_total_value + " AZN";
            totalProductPrice[index].innerHTML = "0.00 AZN"

        })
    })(i);
}

let removeAllButton = document.querySelector(".remove-all-button");
removeAllButton.addEventListener("click",function(){
    basketCounterSpan.innerHTML = 0;
    for(let i = 0; i < productRow.length; i++){
        productRow[i].classList.add("d-none");
    }
    totalSum.innerHTML = "0.00 AZN";
});
