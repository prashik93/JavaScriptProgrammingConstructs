// 4. Sum And Average Of 5 Numbers

let iterator = 0;
let sum = 0;
let count = 0;
for(iterator ; iterator < 5; iterator++) {
    let randomNumber = Math.floor(Math.random() * (99 - 10 + 1))+ 10;
    console.log("Random Number is = " + randomNumber);
    sum += randomNumber;
    count++;
}
console.log("Sum Of Five Number is = " + sum);
console.log("Count Of Numbers is = " + count);
console.log("Average Of 5 Number is = " + sum/count);