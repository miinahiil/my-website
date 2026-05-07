// 1. toString()
// Convert the number into a string and print its type.
let amount = 750;
let result = amount.toString();
console.log(result);
console.log(typeof result);

// 2. toFixed()
// Round the number to 2 decimal places.
let price = 45.6789;
console.log(price.toFixed(2));

// 3. toPrecision()
// Show the number with 4 total digits.
let num = 123.456;
console.log(num.toPrecision(4));

// 4. Number()
// Convert the string into a number.
let value = "500";
console.log(Number(value));

// 5. parseInt()
// Get only the integer value from the string.
let marks = "89.75";
console.log(parseInt(marks));

// 6. parseFloat()
// Convert the string into a decimal number.
let weight = "55.8kg";
console.log(parseFloat(weight));

// 7. isNaN()
// Check whether the value is Not a Number.
let data = "hello";
console.log(isNaN(data));

// 8. valueOf()
// Get the original number value.
let num = 900;
console.log(num.valueOf());

// 9. toExponential()
// Convert the number into exponential form with 2 decimal places.
let num = 123456;
console.log(num.toExponential(2));

// 10. toLocaleString()
// Display the number with commas.
let salary = 1000000;
console.log(salary.toLocaleString());

// Combined Practice 1
// Use toFixed() and toString() together.
let bill = 456.789;
let result = bill.toFixed(1).toString();
console.log(result);

// Combined Practice 2
// Use parseFloat() and toFixed() together.
let itemPrice = "99.999Rs";
let result = parseFloat(itemPrice).toFixed(2);
console.log(result);