/* Asynchronous JavaScript Crash Course */

// JavaScript is Single Threaded, Synchronous and Blocking language.
// Each thread can do only one task at a time.

/* Timeout & Intervals */ 

	// setTimeout :- it executes the code only once when the specific time has elapsed.
	function displayName(name){
		console.log("My Name is " + name);
	}
	let name = "Harry Potter!";
	const exe = setTimeout(displayName,5000,name);
	clearTimeout(exe);

	// setInterval :- it executes the code repeatedly in the given interval time.
	const interval = setInterval(displayName,1000,name);
	clearTimeout(interval);

/* CallBacks */

	// function which is passed as an argument to another function is called callback.
	// function which accepts the another function as an argument is called High Order function.

	// Synchronous callback : a callback which is executed immediately is called Synchronous callback.
	name = "Cpatain America";
	function callback(name){
		console.log("Hello, " + name);
	}

	function higherOrderFunction(callback,name){
		callback(name);
	}
	//higherOrderFunction(callback,name);

	// Asynchronous callback : it is used to continue or resume code execution after
	// an asynchronous operation has completed.

	// ex: setTimeout, Event Listeners etc...

	/* Problem */
	// when we have multiple callbacks which are depends on the result of the previous callbacks
	// then the nesting of the callbacks become so deep that the code becomes difficult to read and maintain.

		// solution :- Promises

/* Promises */

	// Promise is an Object in JavaScript

	// Promise has 3 main states : 
	// 1. Pending   : which is intial state, neither fulfilled nor rejected
	// 2. Fulfilled : operation completed successfully
	// 3. Rejected  : operation failed.

	// Promise.all() : Query Multiple APIs and perform some actions but only after all the APIs have finished laoding
	// 				 : it returns Promise when all the Promises completed successfully or
	//  			 : if any one promise fails 

		/* 
			ex: p1,p2,p3 => p1 : completed , p2 : failed => Promise 
		*/

	// Promise.allSettled() : it is same as Promisea.all() but there is a slight difference.
	//				 		: it returns Promise when all the Promises completed regardless any one of them throws an error

		/* 
			ex: p1,p2,p3 => p1 : completed , p2 : failed, p3 : completed => Promise 
		*/

	// Promise.race() : it returns Promise as soon as one of the promise fulfills or reject. 
		/* 
			ex: p1,p2,p3 => p1 : completed  => Promise => p2 : failed, p3 : completed => Promise 
		*/

function successfulMessage(result){
	console.log("Successful : " + result);
}

function failureMessage(error){
	console.log("Failure : " + error);
}

const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise 1");
	},2000);
});

const p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject("Promise 2");
	},4000);
});

const p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Promise 3");
	},6000);
});

// p1.then(successfulMessage).catch(failureMessage);
// p2.then(successfulMessage).catch(failureMessage);
// p3.then(successfulMessage).catch(failureMessage);

// Promise.all([p1,p2,p3]).then((value)=>{
// 	console.log(value);
// 	console.log("Promise.all() successful");
// }).catch((value)=>{
// 	console.log(value);
// 	console.log("Promise.all() failure");
// });

// Promise.allSettled([p1,p2,p3]).then((value)=>{
// 	console.log(value);
// 	console.log("Promise.allSettled() successful");
// }).catch((value)=>{
// 	console.log(value);
// 	console.log("Promise.allSettled() failure");
// });

// Promise.race([p1,p2,p3]).then((value)=>{
// 	console.log(value);
// 	console.log("Promise.race() successful");
// }).catch((value)=>{
// 	console.log(value);
// 	console.log("Promise.race() failure");
// });

/* Async and Await */

	// async keyword is used to declare async functions.
	// async functions are the instances of the AsyncFunction constructor

	// await keyword pauses the code until that promise settles and returns its result.
	// it only works with async functions, not with other functions

	async function greet(){
		const p1 = () => {
			setTimeout(()=>{
				console.log("OK");
			},2000);
		}

		const result = await p1 ;
		result();
	}
	// greet() ;
	// console.log("Got it");

	// Execution : Sequential, Parallel and Concurrent

	// Sequential
	function resolveHello(){
		return new Promise(resolve => {
			setTimeout(()=>{
				console.log("Hello!");
			},2000);		
		})
	}

	function resolveWorld(){
		return new Promise(resolve => {
			setTimeout(()=>{
				console.log("World!");
			},1000);		
		})
	}

	async function sequential(){
		const p1 = await resolveHello();
		console.log(p1); // 2 seconds 

		const p2 = await resolveWorld();
		console.log(p2); // 3 seconds 
	}
	// sequential();

	// ConCurrent
	async function concurrent(){
		const p1 = resolveHello();
		const p2 = resolveWorld();
		console.log(await p1); // 2 seconds
		console.log(await p2); // 2 seconds
	}
	// concurrent();

	// Parallel
	function parallel(){
		Promise.all([
			(async () => console.log(await resolveHello()))(), // 2 seconds
			(async () => console.log(await resolveWorld()))(), // 1 second
		]).catch((error)=>{
			console.log("Error Occurred!")
		});
	}
	// parallel();

/* Event-Loop */
	
	// Event Loop 

	// 1. Heap Memory : Variables get memory in this section
	// 2. Call Stack : JS pushes it execution flow by pushing functions in call stack
	// 3. Web APIs : Web APIs comes in the picture when Web related API starts to execute
	// 4. Task Queue : It stores and manages the flow of web api that have been invoked.
	// 5. Micro Task Queue : It stores the micro task like the result of promises

	// Task of Micro-Task-Queue has a higher priority than Task of a Task-Queue.