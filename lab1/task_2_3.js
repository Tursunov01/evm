"use strict"
let count = 0;



let interval_2 = setInterval(() => {
    count++;
    console.log(count);
    if (count == 10) {
        clearInterval(interval_2);
    }
}, 2000);


setTimeout(() => {
    let interval_1 = setInterval(() => {
        count++;
        console.log(count);
        if(count == 20) {
            clearInterval(interval_1);
        }
    }, 1000);
}, 20000);
