// Factrorial Using For Loop

const prompt = require("prompt-sync")({sigint : true});

const num = prompt("Enter Number : ");
let fact = 1;

for(i = 2; i <= num; i++) {
    fact = fact * i;
}
console.log("Factorial Of A Number " + num + " is = " + fact);