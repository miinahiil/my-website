// Method 1
// slice()
// Cuts a part of a string using start and end index. Supports negative values.
let word = "minahil";
console.log(word.slice(0, 4));
// slice()with negtiv value 
let text = "Webappdevelopment";
console.log(text.slice(-6, -3));

// Method 2
// substring()
// Cuts part of a string using index, but does NOT support negative values.
let text1 = "Javascript";
console.log(text1.substring(0, 4));

// Method 3
// toUpperCase()
// Converts every letter in a string to UPPERCASE . It does not change the original string, it returns a new one.
let name = "minahil";
 let result = name.toUpperCase();
 console.log(result);

// Method 4
// toLowerCase()
// Converts all characters in a string to lowercase letters.
let email = "MINAHIL@GMAIL.COM";
let data = email.toLowerCase();
console.log(data);

// Method 5
// replace()
// Replaces part of a string with another value (only first match).
let msg = "Hello World";
console.log(msg.replace("World", "Ahmad"));

// Method 6
// includes()
// Checks if a string contains a specific word or character.
let sentence = "I love JavaScript";
console.log(sentence.includes("love"));

// Method 7
// indexOf()
// Returns the position (index) of a word in a string. If not found, returns -1.
let text2 = "Hello World";
console.log(text2.indexOf("World"));

// Method 8
// trim()
// Removes spaces from the beginning and end of a string.
let username = "   Minahil   ";
let user = username.trim();
console.log(user);

// Method 9
// concat()
// Joins two or more strings together.
let first = "Minahil";
let last = "Fatima";
console.log(first.concat(" ", last));

// Method 10
// split()
// Converts a string into an array by splitting it.
let data1 = "red,blue,green";
console.log(data1.split(","));