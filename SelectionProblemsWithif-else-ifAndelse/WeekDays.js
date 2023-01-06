// Read Number And Display Week Day

let randomNumber = Math.floor(Math.random() * 10)%7;
console.log("Single Digit Number  = " + randomNumber);

if (randomNumber == 1) {
    console.log("Monday");
} else if (randomNumber == 2) {
    console.log("Tuesday");
} else if (randomNumber == 3) {
    console.log("Wednesday");
} else if (randomNumber == 4) {
    console.log("Thursday");
} else if (randomNumber == 5) {
    console.log("Friday");
} else if (randomNumber == 6) {
    console.log("Saturday");
}
else{
    console.log("Sunday")
}

