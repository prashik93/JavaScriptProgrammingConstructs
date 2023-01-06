// Prime Numbers In Range Using For Loop

const prompt = require("prompt-sync")({sigint : true});

const num1 = prompt("Enter Number Where To Start To Check It Is Prime Or Not? : ");
const num2 = prompt("Enter Number Where To Stop To Check It Is Prime Or Not? : ");

for(i = num1; i <= num2; i++) {
    let count = 0;
    for(j = 1; j <= i; j++) {
        if(i % j == 0) {
            count++;
        }
    }
    if(count == 2) {
        console.log(i + " ");
    }
}