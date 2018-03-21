let userInput = prompt('What would you like to do?');
let newTodo = '';
let list = [];

while(userInput !== 'quit'){
	if (userInput === 'list'){
		console.log("**********");
		list.forEach(function(item, i){
			console.log(i+ ": " +item)
		});
		console.log("**********");
	}
	else if (userInput === 'new'){
		let newTodo = prompt ('Enter a new todo');
		list.push(newTodo);
		console.log (newTodo + " added to list")
	}
	else if(userInput === "delete"){
		let index = Number(prompt("Enter index of todo to delete"));
		console.log(index);
		list.splice(index, 1);
		console.log("Todo Removed");
	}

	userInput = prompt('What would you like to do?');
}

console.log('You quit the app')
