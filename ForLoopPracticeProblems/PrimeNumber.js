// Prime Number Using For Loop

const prompt = require("prompt-sync")({sigint : true});

const num = prompt("Enter Number To Check It Is Prime Or Not? : ");
let i = 1;
let count = 0;
while(num >= i) {
    if(num % i == 0) {
        count++;
    }
    i++;
}
if(count == 2) {
    console.log("The Number is Prime Number")
    return;
}
console.log("The Number is Not A Prime Number")