// Day Of Month Between March 20 and June 20

const prompt = require("prompt-sync")({sigint: true});

const usrDate = prompt("Enter Date : ");
const usrMonth = prompt("Enter Month : ");

if((usrMonth == 6 && usrDate <= 20) || (usrMonth == 5 && usrDate >= 1 && usrDate < 31) ||
    (usrMonth == 4 && usrDate>= 1 && usrDate < 30) || (usrMonth == 3 && usrDate >= 20 && usrDate < 31 )) {
    console.log("True");
}
else {
	console.log("False");
}