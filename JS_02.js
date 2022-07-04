/* Type Conversion */

let num1 = 10 ;
let num2 = "20" ;

let num3 = num1 + num2 ;
console.log(num3);
console.log(typeof num3);

let num4 = num1 - num2 ;
console.log(num4);
console.log(typeof num4);

// Convert Number to String
let number = 8789 ; 
console.log(typeof number);

number = String(number);
console.log(typeof number);

// Convert String to Number
number = "123456789";
number = Number(number);
console.log(typeof number);

/* String & String Methods */
let message = "My Name is JavaScript!";

// length 
console.log(message.length);

// access an element in string
console.log(message[5]);
console.log(message.charAt(5));

// indexOf
console.log(message.indexOf("a"));

// lastIndexOf
console.log(message.lastIndexOf("a"));

// endsWith
console.log(message.endsWith("JavaScript!"));
console.log(message.endsWith("sxsasx"));

// includes
console.log(message.includes("Name"));
console.log(message.includes("my"));

// substring : [start,end)
console.log(message.substring(1,5));

// slice : [start,end)
console.log(message.slice(0,5));

// split 
console.log(message.split(" "));

// replace
console.log(message.replace("is","was"));

// toUpperCase
console.log(message.toUpperCase());

// toLowerCase
console.log(message.toLowerCase());

// substr : [start,#chars]
console.log(message.substr(3,4));
