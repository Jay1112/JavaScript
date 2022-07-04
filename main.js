// JS is an interpreted language.

/* Alert */ 
// alert("Hello World!");

/* Console */
console.log("Console log");
console.error("Console error");

/* Variables */

	// let : we can change the value of this variable
	let number = 15 ; 
	console.log(number);

	// const : we can't change the value of this variable
	const fixed = 45 ; 
	console.log(fixed);

	// typeof 
	console.log(typeof number);

/* Data-Types */

	// number 
	let num = 50 ; 
	console.log(typeof num);

	// string 
	let name = "Javascript";
	console.log(typeof name);

	// boolean 
	let check = true;
	console.log(typeof check);

	// undefined
	let newVar ;
	console.log(newVar);

	// null
	let head = null;
	console.log(head);

/* String Concatenation */

	let firstName = "Harry";
	let lastName = "Potter";

	let fullName = firstName + " " + lastName ;
	console.log(`My Name is ${fullName}`);
