/* Operators */

let numerator = 50 ; 
let denumerator = 8 ;

// Arithmetic Operations
console.log(numerator + denumerator);
console.log(numerator - denumerator);
console.log(numerator * denumerator);
console.log(numerator / denumerator);
console.log(numerator % denumerator);

// Comparision Operations
console.log(5 > 8);
console.log(5 < 8);
console.log(5 >= 5);
console.log(5 <= 9);

// ==  : it only checks the values of the two varaibles
// === : it checks values as well as the data types of the two variables

console.log(5 ==  "5");
console.log(5 === "5");

/* Prompt */
// let ans = Number(prompt("Enter the Number"));

// if(ans >= 0){
//     console.log("Positive");
// }else{
//     console.log("Negative");
// }

// Switch case
// let ch = prompt("Enter the Character");

// switch(ch){
//     case 'a' :
//     case 'e' : 
//     case 'i' : 
//     case 'o' : 
//     case 'u' : console.log("vowel"); break;
//     default  : console.log("consonants");
// }

// for loop 
for(let i=0;i<=3;i++){
    console.log(`OK : ${i}`);
}

// while loop
let end = 2 ; 
while(end > 0){
    console.log(`End : ${end}`);
    end--;
}

// do while loop
do{
    console.log("Do While : ",end);
    end++;
}while(end<=3)

