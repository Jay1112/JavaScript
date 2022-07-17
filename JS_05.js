/* Functions */

	// Definition
	function displayMessage(){
		console.log("Hello Guys!");
	}

	// Call
	displayMessage();

	// Pass argument
	function displayName(name){
		console.log(`My Name is ${name}`);
	}
	displayName("John");

	// return a value + default parameters
	function calculateAverage(num1 = 0, num2 = 0, num3 = 0){
		return (num1 + num2 + num3) / 3 ;
	}

	let res = calculateAverage(20,45,85);
	console.log("Result : ",res);

	res = calculateAverage(20,41);
	console.log("Result : ",res);

	// Anonymous Function
	let myFunc = (num1, num2) => {
		console.log("OK : ", num1, num2);
	}
	myFunc(45,98);

/* Scoping */

	// let : Local 	Scope (preffered) 
	// var : Global Scope

	console.log("--- Example ---");
	let a = 30 ;
	{
		let a = 20 ;
		console.log(a);
	}
	console.log(a);
	console.log("---------------");

	console.log("--- Example ---");
	let b = 30 ;
	{
		b = 20 ;
		console.log(b);
	}
	console.log(b);
	console.log("---------------");

	console.log("--- Example ---");
	let c = 30 ;
	{
		var d = 40 ;
		console.log(d);
	}
	console.log(d);
	console.log(c);
	console.log("---------------");
