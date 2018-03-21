let age = prompt("What is your age?");
if (age < 0){
	console.log("Error Message")
}
else if(Number.isInteger(Math.sqrt(age))){
	console.log("your age is a perfect square")
}
else if(age == 21){
	console.log("happy 21st birthday")
}
else if((age % 2) !== 0){
	console.log("your age is odd")
}
else{
	console.log("what does it matta?")
}