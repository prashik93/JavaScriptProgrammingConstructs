// Harmonic Number Using For Loop

const prompt = require("prompt-sync")({sigint : true});

let num = prompt("Enter Number : ");
let addition = 0;
for(let iterator = 1; iterator <= num; iterator++) {
    addition += 1 / iterator;
}
console.log("Nth Harmonic Number is = " + addition)
