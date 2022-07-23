// JavaScript : High Level
// 			    Just in time compiled language -> compilation takes place at execution time
//      		Dynamic-typed language

/* console : Prints the Message that you have given it. */

	// normal message
	console.log("Hello,World!");

	// warning message
	console.warn("I am Learning JavaScript");
	
	// error message
	console.error("Error : Always try to build something");

/* Variables */

	// const : You have to assign the value at declaration and You can't change the value.
	const name = "Jay Patel";
	console.log(name);

	// let : You can change and assign the value anytime
	let salary = 50000 ;
	console.log(salary);

/* Data-Types */

	/* Primitive Data Types */

	// string
	const course = "Machine Learning";
	const language = 'Python';
	const platform = `Xcode`;

	// Number
	const number = 59 ; 
	const PI = 3.14 ; 

	// boolean
	const isPrime = true;

	// undefined
	let temp ;
	console.log(temp);

	// null 
	let data = null ;
	console.log(data);

	// Object
	const person = {
		firstName : "Jay",
		lastName : "Patel",
		age : 22,
	};
	console.log("Name : ",person.firstName);
	console.log("Name : ",person.lastName);

	// Arrays 
	let arr = [1,3,5,7,9];
	console.log(arr);
	console.log(arr[0]);

	// Dynamic Typed Language
	let id = 50 ; 
	console.log(id);
	id = "the_earthian_22";
	console.log(id);

/* Operators */

	// Arithmetic
	let x = 11 ;
	let y = 5 ;

	console.log(x + y);
	console.log(x - y);
	console.log(x * y);
	console.log(x / y);
	console.log(x % y);

	// Comparision
	console.log(x > y);
	console.log(x < y);
	console.log(x >= y);
	console.log(x <= y);

	console.log(5 !== "5");
	console.log(5 !== 5);

	/* Logical */

		// AND
		console.log("AND");
		console.log(true && true);
		console.log(true && false);
		console.log(false && true);
		console.log(false && false);

		// OR
		console.log("OR");
		console.log(true || true);
		console.log(true || false);
		console.log(false || true);
		console.log(false || false);

		// NOT
		console.log("NOT");
		console.log(!true);
		console.log(!false);

	/* String Concatenation */
	let fullName = "Harry" + " " + "Potter";
	console.log(fullName);

	/* Ternary Operator */
	let answer = 11 % 2 === 0 ? "Number is Even" : "Number is Odd";
	console.log(answer);

/* Type Conversion */

	/* Type Coersion */
	// (Implicit Conversion : JS automatically converts data types)
	console.log("5" + 5 ); // 55 : string
	console.log("5" - 5 ); // 0 : number
	console.log("5" * 5 ); // 25 : number
	console.log("5" / 5 ); // 1 : number

	console.log("5" + undefined ); // 5undefined
	console.log("5" + null ); // 5null

	console.log("5" - undefined ); // NaN
	console.log("5" - null ); // 5 

	console.log("5" - true); // 4
	console.log("5" - false); // 5

	// (string + undefined -> string) else it is ( variable arithemetic_operator undefined -> NaN)

	/* Explicit Conversion : Manually Conversion */

	// convert to number
	answer = Number("500");
	console.log(typeof answer);

	// convert to string
	answer = String(1000.25);
	console.log(typeof answer);

	// convert to Boolean
	// Note : 0, false, null, undefined, '', NaN -> they are treated as false and value as 0
	answer = Boolean(52);
	console.log(typeof answer);

/* Equality */

	// ==  : it only compares values
	// === : it compares values as well as data-types
	console.log(5 == "5");
	console.log(5 == 5);

	console.log(5 === "5");
	console.log(5 === 5);

/* Conditional Statements */

	// if else 
	let check = false;
	if(check){
		console.log("You are Right!");
	}else{
		console.log("You are Wrong!");
	}

	// Positive, Negative and Zero
	let checkNumber = 5 ;
	if(checkNumber > 0){
		console.log("Positive Number");
	}else if(checkNumber < 0){
		console.log("Negative Number");
	}else{
		console.log("Zero");
	}

	// color : red, blue, invalid
	let color = 'yellow';
	switch(color){
		case 'red' : console.log("color is red"); break;
		case 'blue' : console.log("color is blue"); break;
		default : console.log('color is invalid');
	}

/* Looping */

	// for loop
	console.log("For Loop : ");
	for(let i=1;i<=5;i++){
		console.log("Iteration : ",i);
	}

	// while loop
	console.log("While Loop : ");
	let counter = 0;
	while(counter <= 5){
		console.log("Iteration : ",counter);
		counter++;
	}

	// do while loop
	console.log("Do While Loop : ");
	let stop = 3 ; 
	do{
		console.log("Do While : " + stop);
		stop--;
	}while(stop > 0);

	// for of loop
	console.log("for of Loop : ");
	for(let item of arr){
		console.log(item);
	}

/* Functions */

	// normal display message
	function display(){
		console.log("Good Morning");
	}
	display();

	// greeting message
	function greet(username){
		console.log("Hello," + username);
	}
	greet("John");
	greet("Harry");

	// add two numbers
	function add(num1, num2){
		return num1 + num2 ;
	}
	let sum = add(20,30);
	console.log(sum);

/* Arrow Functions */

	const arrowSum = (a,b) => {
		return a + b;
	};
	console.log(arrowSum(52,36));

	const arrowMul = (a,b) => a*b ;
	console.log(arrowMul(5,9));

/* Scoping */

	/* Block Scope */
	if(true){ 
		let myName = "Patel";
		console.log(myName);
	}

	/* Function Scope */
	function displayName(){
		let myName = "John Carter";
		console.log(myName);
	}
	displayName();

	/* Global Scope */
	// Global scope variable is accessible in block scope as well as in the function scope.
	let newdata = "Crash Course is completed!";
	console.log(newdata);

/* Next Step : Advanced JavaScript Concepts... */