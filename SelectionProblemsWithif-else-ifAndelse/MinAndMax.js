// Read 3 Number Perform Arithmatic Operations And Find Min And Max

const prompt = require('prompt-sync')();

console.log("Enter 3 numbers :- ");
let num1 = parseInt(prompt("Enter First Number : "));
let num2 = parseInt(prompt("Enter Second Number : "));
let num3 = parseInt(prompt("Enter Third Number : "));

let op1 = num1 + num2 * num3;
console.log(op1);

let op2 = num1 % num2 + num3;
console.log(op2);

let op3 = num3 + num1 / num2;
console.log(op3)

let op4 = num1 * num2 + num3;
console.log(op4);

let max;
let min;

if((op1 > op2) && (op1 > op3) && (op1 > op4)) {
    max = op1;
} else if ((op2 > op1) && (op2 > op3) && (op2 > op4)) {
    max = op2;
} else if ((op3 > op1) && (op3 > op2) && (op3 > op4)) {
    max = op3;
} else {
    max = op4;
}

if((op1 < op2) && (op1 < op3) && (op1 < op4)) {
    min = op1;
} else if ((op2 < op1) && (op2 < op3) && (op2 < op4)) {
    min = op2;
} else if ((op3 < op1) && (op3 < op2) && (op3 < op4)) {
    min = op3;
} else {
    min = op4;
}


console.log("Maximum value = " + max);
console.log("Minimum value = " + min);