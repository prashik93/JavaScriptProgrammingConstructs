// Read Number And Display Respective Week Day

const prompt = require("prompt-sync")({sigint: true})

let randomNumber = Math.floor(Math.random() * 10)% 7;
console.log("Single Digit Number  = " + randomNumber);
switch (randomNumber) {
    case 1: {
        console.log("Monday");
        break;
    } case 2: {
        console.log("Tuesday");
        break;
    } case 3: {
        console.log("Wednesday");
        break;
    } case 4: {
        console.log("Thursday");
        break;
    } case 5: {
        console.log("Friday");
        break;
    } case 6: {
        console.log("Saturday");
        break;
    }
    default : {
        console.log("Sunday")
    }
}