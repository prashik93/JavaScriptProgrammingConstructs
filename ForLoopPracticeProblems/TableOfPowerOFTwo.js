// Table Of Power Of Two Using For Loop

const prompt = require("prompt-sync")({sigint : true});

let num = prompt("Enter Number : ");
for(let iterator = 0; iterator <= num; iterator++) {
    console.log(Math.pow(2, iterator));
}
