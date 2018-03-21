const age = prompt("What is your age?")
let dayAge = 0;
function yearsToDays(age){
	for (i = 1; i <= age; i++){
		if (i % 4 === 0){
			 dayAge += 366;
		}
		else{
			 dayAge += 365;
		}
	}
}
yearsToDays(age);
console.log("In days, your age is " + dayAge + " days old")