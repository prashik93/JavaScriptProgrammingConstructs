// Table Of Power Of Two Using While Loop

const prompt = require("prompt-sync")({sigint : true});

let num = prompt("Enter Number : ");
let iterator = 0;
while(iterator <= num) {
    let powerOfTwo = (Math.pow(2, iterator));
    if(powerOfTwo <= 256) {
        console.log(powerOfTwo);
        iterator++
    } else  
        return;
}

