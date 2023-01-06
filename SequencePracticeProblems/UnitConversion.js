// 5. Unit Conversion

// a. Convert Inches into Feet
 const prompt = require ("prompt-sync")({sigint: true})

// const length = prompt("Enter length in Inches : ");
// let result = length / 12;
// console.log(length + " inches in Feet is : " + result + "ft.");

// b. Convert Feet into Meters
const lengthInFeet = prompt("Enter length in Feet : ");
let lengthInMeter = lengthInFeet / 3.28;
console.log("Unit conversion of Length" + lengthInFeet + "ft. is " + lengthInMeter + "mtr.")

const breadthInFeet = prompt("Enter breadth in Feet : ")
let breadthInMeter = breadthInFeet / 3.28;
console.log("Unit conversion of Breadth" + breadthInFeet + "ft. is " + breadthInMeter + "mtr.")

// c. Area Of 25 Plots

let areaOfOnePlot = lengthInFeet * breadthInFeet;
console.log("Area of One Plot = " + areaOfOnePlot);

let areaInAcres = areaOfOnePlot / 43560;
console.log("Area of One Plot In Acre = " + areaInAcres);

let areaOfTwentyFivePlots = areaInAcres * 25;
console.log("Area of 25 plots is = " + areaOfTwentyFivePlots);