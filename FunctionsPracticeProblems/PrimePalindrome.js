// Prime Palindrome Using Function

const prompt = require('prompt-sync')({sigint : true});

function checkPrime(num) {
    let i = 1;
    let count = 0;
    while(num >= i) {
        if(num % i == 0) {
            count++;
        }
        i++;
    }
    if(count == 2) {
        console.log(num + " Is Prime Number");
        return;
    }
    console.log(num + " Is Not A Prime Number");
}

function checkPalindrome(num) {
    while(num > 0) {
        rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    num = rev;
    console.log("Palindrome of the Number is = " + num);
}


let num = prompt('Enter the number: ');
let rem = 0;
let rev = 0;
checkPrime(num);
checkPalindrome(num);
checkPrime(rev);