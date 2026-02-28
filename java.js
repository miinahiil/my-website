// • Difference between var, let, and const??

var name = "Minu";
let age = 19;
const country = "Pakistan";
console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);
// changing values
name = "Ayesha";   // allowed
age = 20;          // allowed
// country = "India";  // (cannot change because it is constant)
console.log("Updated Name:", name);
console.log("Updated Age:", age);


// • When to use let??

let marks = 80;
if (marks > 50) {
    let result = "Pass";
    console.log(result);
}


// • Why const is important??

const pi = 3.14;
console.log("Value of pi:", pi);
// it is important because important values like pi should never change by mistake.



// 2. Data Types??

// String
let name = "Minu";

// Number
let age = 19;

// Boolean
let isStudent = true;

// Undefined
let x;

// Null
let y = null;

console.log(name, "-", typeof name);
console.log(age, "-", typeof age);
console.log(isStudent, "-", typeof isStudent);
console.log(x, "-", typeof x);
console.log(y, "-", typeof y);


// 3. User Input??

// prompt() basics
let name = prompt("Enter your name:");
console.log(name);

// Getting input from the user
let age = prompt("Enter your age:");
console.log(age);

// Converting input to number 
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

let sum = Number(num1) + Number(num2);
console.log(sum);
