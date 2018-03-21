const number = 7;
const stringGuess = prompt("Guess a number");
const guess = Number(stringGuess);
if (guess === number){
	alert("You guessed it")
}
else if (guess > number){
	alert("Too High, guess again")
}
else{
	alert("Too low, guess again")
}
