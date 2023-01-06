// Flip Coin problem till either Heads or Tails wins 11 times. Using While Loop

let headCount = 0;
let tailCount = 0;
let maxWinCount = 11;
 
while(true){
    let randomNumber = Math.floor ( Math.random() * 2 );

    if(randomNumber == 1){
        headCount++;
    }
    else{
        tailCount++;
    }

    if(headCount == 11 || tailCount == 11){
        break;
    }
}

if(headCount > tailCount)
	console.log("Head Wins");
else
    console.log("Tail Wins");

console.log("Head Count is: " + headCount);
console.log("Tail Count is: " + tailCount);

