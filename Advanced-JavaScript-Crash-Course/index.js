/* Advanced JavaScript Concepts */

/* Nested Function Scope : Lexical Scoping */
	// first it tries to find the variable in the present scope, if it doesn't find then it moves the upper level until it reches to the global scope
	let a = 10 ; 
	function outer(){
		let b = 20 ; 
		function inner(){
			let c = 30 ;
			console.log(a,b,c);
		}
		inner();
	}
	outer();

/* Closures */
	// In a JavaScript, when we return a function from another function, 
	// we are effectively returning a combition of functions along with the function's scope.
	// that combination of functions and its scope chain is called closure in javascript.
	function outer(){
		let counter = 0 ;
		function inner(){
			counter++;
			console.log(counter);
		}
		return inner ;
	}
	const fn = outer();
	fn();
	fn();

// in the above example, outer return inner function and also its scope.

/* Function Currying */
	// we transform a function with multiple arguments into sequence of function with only one argument.
	// f(a,b,c) => f(a)(b)(c)

	function sum(a,b,c){
		return a + b + c;
	}

	function curry(fn){
		return function(a){
			return function(b){
				return function(c){
					return fn(a,b,c);
				}
			}
		}
	}

	const curriedSum = curry(sum);
	console.log(curriedSum(2)(3)(5));

	const add2 = curriedSum(2);
	const add3 = add2(3);
	const add5 = add3(5);
	console.log(add2); // function
	console.log(add3); // function 
	console.log(add5); // number

/* this keyword */

	// implicit binding
	let person = {
		name : "John",
		displayName : function(){
			console.log("My Name is " + this.name);
		},
	};
	person.displayName();

	// Explicit Binding
	function sayMyName(){
		console.log("Name : ",this.name);
	}
	sayMyName();
	sayMyName.call(person);

	// new binding
	function Person(name){
		// default : this = {}
		this.name = name
	}

	const p1 = new Person('Vishwas');
	const p2 = new Person('Titan');

	console.log(p1.name);
	console.log(p2.name);

	// default biniding : it means binding depends on the Global Scope.
	globalThis.name = 'Harry';
	sayMyName();

	/* Order of Precedence */
	// 1. New Binding
	// 2. Explicit Binding
	// 3. Implicit Binding
	// 4. Default Binding

/* ProtoType */

	function Person(fName,LName){
		this.firstName = fName ; 
		this.lastName = LName ; 
	}

	const person1 = new Person('Harry','Potter');
	const person2 = new Person('Jethalal','Gada');

	person1.getFullName = function () {
		return this.firstName + ' ' + this.lastName; 
	}

	console.log(person1.getFullName());

	Person.prototype.getFullPersonName = function () {
		return this.firstName + '--' + this.lastName ;
	}

	console.log(person1.getFullPersonName());
	console.log(person2.getFullPersonName());

/* Prototypal Inheritance */
	
	function SuperHero(fName,lName){
		Person.call(this,fName,lName);
		this.isHero = true ;
	}
	SuperHero.prototype = Object.create(Person.prototype);

	// constructor overloading
	SuperHero.prototype.constructor = SuperHero ;

	SuperHero.prototype.getFightCrime = function () {
		return "I am a SuperHero!!!";
	}

	// Create an Object of Super Hero and try
	const hero = new SuperHero('Captain','America');
	console.log(hero.getFullPersonName());
	console.log(hero.getFightCrime());

/* Class */

	class PersonClass {
		constructor(fName, lName){
			this.firstName = fName ; 
			this.lastName  = lName ; 
		}

		getFullName(){
			return this.firstName + ' -:- ' + this.lastName ; 
		}
	}

	// Person Object
	const pc1 = new PersonClass("Rocky","Gohel");
	console.log(pc1.getFullName());

	class SuperHeroClass extends PersonClass {
		constructor(fName,lName){
			super(fName,lName);
			this.isHero = true ;
		}

		getFightCrime(){
			return "I am a Super Hero!!"
		}
	}

	// SuperHero Object
	const obj = new SuperHeroClass('Rahul','Modi');
	console.log(obj.getFullName());
	console.log(obj.getFightCrime());

/* Iterators and Iterables */
	
	// for of loop
	let name = "Vishwas";
	for(const str of name){
		console.log(str);
	}

	const obj1 = {
		[Symbol.iterator] : function(){
			let step = 0 ; 
			const iterator = {
				next : function(){
					step++;
					if(step === 1){
						return {value : "Hello", done : false};
					}else if(step === 2){
						return {value : "World", done : false};
					}
					return {value : undefined, done : true};
				}
			}
			return iterator;
		}
	};

	for(const word of obj1){
		console.log(word);
	}

/* Generators */

	// In normal function,it executes the whole code inside it but
	// inside Generator function we can stop the function at the point at once and continue from there when 
	// we call that generator function again.

	function normalFunction(){
		console.log("Hello");
		console.log("World");
	}

	function* generatorFunction(){
		yield "Hello(Generator)";
		yield "World(Generator)";
	}

	const generatorObject = generatorFunction() ; 
	for(const item of generatorObject){
		console.log(item);
	}

/* The End */