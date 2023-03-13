let generalPrice = document.querySelectorAll(".price-cell .general-price");
let productSumPrice = document.querySelectorAll(".total-price-cell .product-sum-price");
let decrementButton = document.querySelectorAll(".counter-cell .decrement-button");
let productNumbSpan = document.querySelectorAll(".counter-cell .cp-number")
let incrementButton = document.querySelectorAll(".counter-cell .increment-button");

let totalProductSum = document.querySelector(".total-product-sum");
let catdirilmaSpan = document.querySelector(".catdirilma-span");
let endirimSpan = document.querySelector(".endirim-span");
let generalTotalSum = document.querySelector(".general-total-sum");

let deleteButton = document.querySelectorAll(".delete-button");
let sebetTableRow = document.querySelectorAll(".sebet-table .product-row");

for(let i = 0; i < productSumPrice.length; i++){
    (function(index){
        productSumPrice[index].innerHTML = generalPrice[index].innerHTML;
        let totalProductSumValue = 0;
        for(let i = 0; i < productSumPrice.length; i++){
            totalProductSumValue += parseFloat(productSumPrice[i].innerHTML);
        }
        totalProductSum.innerHTML = totalProductSumValue.toFixed(2) + " ₼";
        let generalTotalSumValue = 0;
        generalTotalSumValue = totalProductSumValue + parseFloat(catdirilmaSpan.innerHTML) + parseFloat(endirimSpan.innerHTML);
        generalTotalSum.innerHTML = generalTotalSumValue.toFixed(2) + " ₼";
    })(i);
}

for(let i = 0; i < incrementButton.length; i++){
    (function(index){
        incrementButton[i].addEventListener("click",function(){
            let productNumbSpanValue = parseInt(productNumbSpan[index].innerHTML);
            productNumbSpanValue += 1;
            productNumbSpan[index].innerHTML = productNumbSpanValue;

            let generalPriceValue = parseFloat(generalPrice[index].innerHTML);
            let sumValue_1 = generalPriceValue * productNumbSpanValue;
            productSumPrice[index].innerHTML = sumValue_1.toFixed(2) + " ₼";

            let totalProductSumValue = 0;
            for(let i = 0; i < productSumPrice.length; i++){
                totalProductSumValue += parseFloat(productSumPrice[i].innerHTML);
            }
            totalProductSum.innerHTML = totalProductSumValue.toFixed(2) + " ₼";
            let generalTotalSumValue = 0;
            generalTotalSumValue = totalProductSumValue + parseFloat(catdirilmaSpan.innerHTML) + parseFloat(endirimSpan.innerHTML);
            generalTotalSum.innerHTML = generalTotalSumValue.toFixed(2) + " ₼";

        });

    })(i);
}
for(let i = 0; i < decrementButton.length;i++){
    (function(index){
        decrementButton[i].addEventListener("click",function(){
            let productNumbSpanValue = parseInt(productNumbSpan[index].innerHTML);
            if(productNumbSpanValue == 1){
                productNumbSpan[index].innerHTML == 1;
            }else{
                productNumbSpanValue -= 1;
                productNumbSpan[index].innerHTML = productNumbSpanValue;
            }

            let generalPriceValue = parseFloat(generalPrice[index].innerHTML);
            let productSumPriceValue = parseFloat(productSumPrice[index].innerHTML);
            let sumValue_1 = productSumPriceValue - generalPriceValue;

            let totalProductSumValue = parseFloat(totalProductSum.innerHTML);
            let sumValue_2 = totalProductSumValue - generalPriceValue;

            let generalTotalSumValue = parseFloat(generalTotalSum.innerHTML);
            let sumValue_3 = generalTotalSumValue - generalPriceValue;
            if(productNumbSpanValue == 1){
                productSumPrice[index].innerHTML = generalPriceValue + " ₼"
                totalProductSumValue = 0;
                for(let i = 0; i < productSumPrice.length; i++){
                    totalProductSumValue += parseFloat(productSumPrice[i].innerHTML);
                }
                totalProductSum.innerHTML = totalProductSumValue.toFixed(2) + " ₼";

                generalTotalSumValue = 0;
                generalTotalSumValue = totalProductSumValue + parseFloat(catdirilmaSpan.innerHTML) + parseFloat(endirimSpan.innerHTML);
                generalTotalSum.innerHTML = generalTotalSumValue.toFixed(2) + " ₼";
            }else{
                productSumPrice[index].innerHTML = sumValue_1.toFixed(2) + " ₼";
                totalProductSum.innerHTML = sumValue_2.toFixed(2) + " ₼";
                generalTotalSum.innerHTML - sumValue_3.toFixed(2) + " ₼";
            }
        })
    })(i);
}

for(let i = 0; i < deleteButton.length; i++){
    (function(index){
        deleteButton[i].addEventListener("click",function(){
            sebetTableRow[index].classList.add("d-none");

            let totalProductSumValue = parseFloat(totalProductSum.innerHTML);
            let productSumPriceValue = parseFloat(productSumPrice[index].innerHTML)
            let sumValue_1 = totalProductSumValue - productSumPriceValue;

            let generalTotalSumValue = parseFloat(generalTotalSum.innerHTML);
            let sumValue_2 = generalTotalSumValue - productSumPriceValue;

            totalProductSum.innerHTML = sumValue_1.toFixed(2) + " ₼";
            generalTotalSum.innerHTML = sumValue_2.toFixed(2) + " ₼";
        })
    })(i);
}