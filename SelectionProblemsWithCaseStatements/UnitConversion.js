// Unit Conversion Using Switch Statement
const prompt = require("prompt-sync")();

const number = prompt("What do you want to do?\n1.Feet To Inch\n2.Feet To Meter\n3.Inch To Feet\n4.Meter to Feet\nEnter Your Choice : ");

const digit = prompt("Enter the length for conversion : ");

switch (Number(number)) {
    case 1:
        let feetToInch = Number(digit) * 12;
        console.log("Feet to Inch : " + feetToInch);
        break;
    case 2:
        let feetToMeter = Number(digit) / 3.28;
        console.log("Feet to Meter : " + feetToMeter);
        break;
    case 3:
        let inchToFeet = Number(digit) / 12;
        console.log("Inch to Feet : " + inchToFeet);
        break;    
    case 4:
        let meterToFeet = Number(digit) * 3.28;
        console.log("Meter to Feet : " + meterToFeet);
        break
    default:
        console.log("Please Give Valid Input...");
        break;
}