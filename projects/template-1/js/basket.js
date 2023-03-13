let productCard = document.querySelectorAll('.product-card')
let addBasketButton = document.querySelectorAll('.add-basket-button');
let basketIconBadge = document.querySelector('.basket-button span');

let emptyText = document.querySelector('.empty-text');
let productsWrapper = document.querySelector('#basket-offcanvas .products-wrapper');
let totalPriceSpan = document.querySelector('.total-price');

for(let i = 0; i < addBasketButton.length; i++){
    (function(index){
        addBasketButton[i].addEventListener('click',function(){
            //basket badge settings
            let badgeValue = parseInt(basketIconBadge.innerHTML);
            badgeValue += 1;
            basketIconBadge.innerHTML = badgeValue;
            basketIconBadge.classList.toggle('active');
            let numbSpan = document.createElement('span');
            numbSpan.setAttribute('class','numb');
            numbSpan.innerHTML = '+1';
            addBasketButton[index].appendChild(numbSpan);

            //basket offcanvas settings
            if(emptyText){
                emptyText.classList.add('d-none');
            }
            //create elements
            let product = document.createElement('div');
            let productinfo = document.createElement('div');
            let productName = document.createElement('span');
            let productCategory = document.createElement('span');
            let productPrice = document.createElement('span');
            let deleteButton = document.createElement('button');
            let deleteIcon = document.createElement('i');

            //element set class
            product.setAttribute('class','product');
            productinfo.setAttribute('class','info');
            productName.setAttribute('class','name');
            productCategory.setAttribute('class','category');
            productPrice.setAttribute('class','price');
            deleteButton.setAttribute('class','product-delete-button');
            deleteIcon.setAttribute('class','fa-solid fa-trash');

            // get product data
            let name_span_value = productCard[index].querySelector('.details .info span.name').innerHTML;
            let category_span_value = productCard[index].querySelector('.details .info span.category').innerHTML;
            let price_span_value = productCard[index].querySelector('.details .price .true-price').innerHTML;

            localStorage.setItem('name_value',name_span_value);
            localStorage.setItem('category_value',category_span_value);
            localStorage.setItem('price_value',price_span_value);

            //set product data
            productName.innerHTML = localStorage.getItem('name_value');
            productCategory.innerHTML = localStorage.getItem('category_value');
            productPrice.innerHTML = localStorage.getItem('price_value');
            
            //element append
            productinfo.appendChild(productName);
            productinfo.appendChild(productCategory);
            productinfo.appendChild(productPrice);
            product.appendChild(productinfo);
            
            product.appendChild(deleteButton);
            deleteButton.appendChild(deleteIcon);
            productsWrapper.appendChild(product);

            //calculate function
            let total = parseFloat(totalPriceSpan.innerHTML.slice(1,1000000));
            total = total + parseFloat(productPrice.innerHTML.slice(1,1000000));
            totalPriceSpan.innerHTML = '$' + total.toFixed(2);

             deleteButton.addEventListener('click',function(){
                product.remove();
                let badgeValue = parseInt(basketIconBadge.innerHTML);
                if(badgeValue == 0){
                    basketIconBadge.innerHTML = 0
                }else{
                    badgeValue -= 1;
                    basketIconBadge.innerHTML = badgeValue;
                }
                let produtcRow = document.querySelectorAll('.products-wrapper .product')
                if(produtcRow.length == 0){
                    emptyText.classList.remove('d-none')
                }

                let total = parseFloat(totalPriceSpan.innerHTML.slice(1,1000000));
                if(total == 0){
                    totalPriceSpan.innerHTML = "$0.00"
                }else{
                    total = total - parseFloat(productPrice.innerHTML.slice(1,1000000));
                    totalPriceSpan.innerHTML = '$' + total.toFixed(2);
                }
            })

        })
    })(i);
}

