// Find Magic Number Using While Loop

const prompt = require("prompt-sync")({sigint : true});

console.log("Think Number Between 1 to 100 ");
let start=1
let end=100
let flag = true;
while(flag) {
    let value = Math.floor((start + (end - start)/2));
    console.log("\nPress G if number is Got.\nPress Y if number is less than " + value  + "\nPress N if number is greater than " + value);
    let ch = prompt("\nEnter Your Choice : ")

    if(ch == 'Y') {
        end  = value;
    } else 
        start = value;
    if(ch == "G") {
        console.log("The Magical Number is = " + value)
        flag = false;
    }

}