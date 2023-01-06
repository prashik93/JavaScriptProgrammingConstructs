// Palindrome Using Function

const prompt = require('prompt-sync')({sigint : true});

function checkPalindrome(num1, num2) {
    let rem = 0;
    let rev = 0;

    while(num2 > 0) {
        rem = num2 % 10;
        rev = (rev * 10) + rem;
        num2 = Math.floor(num2 / 10);
    }

    console.log(rev);
    console.log(num1);
    if(rev == num1) {
        console.log("Palindrome")
        return;
    } 
    console.log("Not Palindrome")
}

let num1 = prompt('Enter first number: ');
let num2 = prompt('Enter second number: ');
checkPalindrome(num1, num2);