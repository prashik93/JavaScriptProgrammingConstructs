// Display The Units

const prompt = require('prompt-sync')();

let usrInput = prompt("Enter a number : ");

if (usrInput >= 1 && usrInput <= 9) {
    console.log("Unit");
}
else if (usrInput >= 10 && usrInput <= 99) {
    console.log("Ten");
}
else if (usrInput >= 100 && usrInput <= 999) {
    console.log("Hundred");
}
else if (usrInput >= 1000 && usrInput <= 9999) {
    console.log("Thousand");
}
else {
    console.log("Number Is Zero Or Greater Than 1000")
}
