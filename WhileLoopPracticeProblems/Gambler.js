// Gambler Program Using While Loop

let money = 100;
let win = 0;
let loss = 0;

let flag = true;
while(flag) {
	let bet = Math.floor ( Math.random() * 10 )% 2;
	if(bet == 1) {
		win++;
		money++;
    } else {
		loss++;
		money--;
    }

	if((money == 200) || (money == 0))
		flag = false;

}

console.log("Win :- " + win);
console.log("Loss :- " + loss);
console.log("Money :- " + money);

