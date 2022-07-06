/* Arrays */

// standard way to make an array
let arr = new Array();

arr[0] = 12 ; 
console.log(arr);

// if there is a no any element exists at the end then it returns undefined
console.log(arr[1]);

/* Array Methods */

    // push : insert the element at the end of the array
    arr.push("Java");
    console.log(arr);

    // pop : remove the element from the end of the array
    arr.pop();
    console.log(arr);

    // unshift : insert the element at the front of the array
    arr.unshift("Python");
    console.log(arr);

    // shift : remove the element from the front of the array
    arr.shift();
    console.log(arr);

    // splice : [start,#chars]
    arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    arr.splice(2,3);
    console.log(arr);

    // reverse 
    arr.reverse();
    console.log(arr);

    // slice : [start,end)
    let newArray = arr.slice(2,5);
    console.log(newArray);

    // includes
    console.log(arr.includes(12));

/* Array with Loops */

    let numbers = new Array();

    for(let i=1;i<=10;i++){
        numbers.push(i*5);
    }
    console.log(numbers);

/* Objects */

let person = {
    name : "Harry Potter",
    age : 22,
    height : 170,
    weight : 60,
};
console.log(person);

// access a property
console.log(person.name);

// add new prperty
person.country = "USA";
console.log(person);