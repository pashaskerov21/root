let reportSpan = document.querySelectorAll(".report-counter");
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
