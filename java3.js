// Arithmetic Operators Programs

// 1. Total price of items in cart
let item1 = 500;
let item2 = 300;
let item3 = 200;
let total = item1 + item2 + item3;
console.log("Total Price:", total);



// 2. Discounted price (10%)
let price = 1000;
let discount = price * 0.10;
let finalPrice = price - discount;
console.log("Final Price:", finalPrice);



// 3. Total bill with 18% tax
let bill = 2000;
let tax = bill * 0.18;
let totalBill = bill + tax;
console.log("Total Bill:", totalBill);



// 4. BMI Calculator
let weight = 70; // kg
let height = 1.75; // meters
let bmi = weight / (height ** 2);
console.log("BMI:", bmi.toFixed(2));



// 5. Monthly salary after tax
let salary = 50000;
let tax = salary * 0.10;
let netSalary = salary - tax;
console.log("Net Salary:", netSalary);
6. Average rating
let r1 = 4, r2 = 5, r3 = 3, r4 = 4, r5 = 5;
let average = (r1 + r2 + r3 + r4 + r5) / 5;
console.log("Average Rating:", average);



// 7. Delivery charge calculator
let orderAmount = 800;
let deliveryCharge = orderAmount > 1000 ? 0 : 100;
console.log("Delivery Charge:", deliveryCharge);



// 8. Simple Interest Calculator
let principal = 10000;
let rate = 5;
let time = 2;
let interest = (principal * rate * time) / 100;
console.log("Simple Interest:", interest);



// 9. Remaining balance after withdrawal
let balance = 5000;
let withdraw = 1500;
let remaining = balance - withdraw;
console.log("Remaining Balance:", remaining);



// 10. Time converter (minutes → hours & minutes)
let minutes = 130;
let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;
console.log(hours + " hours " + remainingMinutes + " minutes");



// 3. If-Else Programs

// 1. Login system
let username = "admin";
let password = "1234";
if (username === "admin" && password === "1234") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}



// 2. Age restriction (18+)
let age = 16;
if (age >= 18) {
    console.log("Access Allowed");
} else {
    console.log("Access Denied");
}



// 3. Discount system
let order = 250;
if (order > 200) {
    console.log("20% Discount");
} else if (order > 100) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}



// 4. Student grading system
let marks = 75;
if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}



// 5. Weather advisory system
let weather = "hot";
if (weather === "hot") {
    console.log("Drink water and stay cool");
} else if (weather === "cold") {
    console.log("Wear warm clothes");
} else if (weather === "rainy") {
    console.log("Carry an umbrella");
} else {
    console.log("Weather unknown");
}