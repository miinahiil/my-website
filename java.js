// 1. Grocery Bill Calculator

function calculateBill(items) {
    let total = 0;
    for (let i = 1; i <= items; i++) {
        let price = parseFloat(prompt("Enter price of item " + i + ":"));
        total += price;
    }
    return total;
}
let items = parseInt(prompt("Enter number of items:"));
let total = calculateBill(items);
if (total > 5000) {
    total = total - (total * 0.10);
}
console.log("Final Bill: " + total);



// 2. Student Result System

function calculateGrade(avg) {
    if (avg >= 80) return "A";
    else if (avg >= 60) return "B";
    else if (avg >= 40) return "C";
    else return "Fail";
}
let name = prompt("Enter student name:");
let total = 0;
for (let i = 1; i <= 5; i++) {
    let marks = parseInt(prompt("Enter marks of subject " + i + ":"));
    total += marks;
}
let avg = total / 5;
let grade = calculateGrade(avg);
console.log("Name: " + name);
console.log("Total: " + total);
console.log("Average: " + avg);
console.log("Grade: " + grade);



// 3. ATM Withdrawal System

function withdrawMoney(balance, amount) {
    if (amount > balance) {
        console.log("Insufficient balance");
        return balance;
    } else {
        return balance - amount;
    }
}
let balance = 10000;
let attempts = 3;
while (attempts > 0) {
    let amount = parseFloat(prompt("Enter amount to withdraw:"));
    let newBalance = withdrawMoney(balance, amount);
    if (newBalance !== balance) {
        balance = newBalance;
        break;
    }
    attempts--;
    console.log("Attempts left: " + attempts);
}
console.log("Remaining Balance: " + balance);



// 4. Restaurant Order System

function calculateOrder(choice, qty) {
    let price = 0;
    if (choice == 1) price = 500;
    else if (choice == 2) price = 1200;
    else if (choice == 3) price = 200;
    return price * qty;
}
console.log("Menu:\n1. Burger = 500\n2. Pizza = 1200\n3. Drink = 200");
let choice = parseInt(prompt("Enter your choice:"));
let qty = parseInt(prompt("Enter quantity:"));
let total = calculateOrder(choice, qty);
if (total > 2000) {
    total -= total * 0.15;
}
console.log("Final Bill: " + total);



// 5. Employee Salary Calculator

function calculateSalary(hours) {
    let rate = 500;
    if (hours > 40) {
        return (40 * rate) + ((hours - 40) * rate * 1.5);
    } else {
        return hours * rate;
    }
}
for (let i = 1; i <= 3; i++) {
    let name = prompt("Enter employee name:");
    let hours = parseInt(prompt("Enter hours worked:"));
    let salary = calculateSalary(hours);
    console.log("Employee: " + name);
    console.log("Salary: " + salary);
}