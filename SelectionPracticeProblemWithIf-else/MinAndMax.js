// Find Maximum And Minimum Between 5 Numbers

let maximum;
let minimum;

let num1 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num2 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num3 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num4 = Math.floor(Math.random() * (999 - 100 + 1) + 100);
let num5 = Math.floor(Math.random() * (999 - 100 + 1) + 100);

if((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5)) {
    maximum = num1;
} else if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
    maximum = num2;
} else if ((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
    maximum = num3;
} else if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)) {
    maximum = num4;
} else {
    maximum = num5;
}

if((num1 < num2) && (num1 < num3) && (num1 < num4) && (num1 < num5)) {
    minimum = num1;
} else if ((num2 < num1) && (num2 < num3) && (num2 < num4) && (num2 < num5)) {
    minimum = num2;
} else if ((num3 < num1) && (num3 < num2) && (num3 < num4) && (num3 < num5)) {
    minimum = num3;
} else if ((num4 < num1) && (num4 < num2) && (num4 < num3) && (num4 < num5)) {
    minimum = num4;
} else {
    minimum = num5;
}
console.log("3 Digit Random Number = " + num1);
console.log("3 Digit Random Number = " + num2);
console.log("3 Digit Random Number = " + num3);
console.log("3 Digit Random Number = " + num4);
console.log("3 Digit Random Number = " + num5);
console.log("Maximum Number is = " + maximum + " And Minimum Number is = " + minimum);