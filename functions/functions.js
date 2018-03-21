function isEven(n){
	if(n % 2 === 0){
		return true;
	}
	else{
		return false;
	}
}

function factorial(n){
	if (n === 0){
		return 1;
	}
	let answer = n;
	while(n > 1){
		answer*= (n - 1);
		n--
	}
	return answer;
}

function kebabToSnake(str){
	for (var i = 0; i < str.length; i++) {
		if(str[i] === "-"){
			str = str.replace("-","_")
		}
	}
	return str
}