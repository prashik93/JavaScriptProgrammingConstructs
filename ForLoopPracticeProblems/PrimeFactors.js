// Prime Factors Using For Loop

const prompt = require("prompt-sync")({sigint : true});

let num = prompt("Enter Number To Get Its Prime Factors : ");
console.log("Prime factors of " + num + " are = ");

for(i = 2; i*i <= num; i++) {
    while(num % i == 0) {
        console.log(i + " ");
        num = num / i;
    }
}
console.log(num);