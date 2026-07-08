/**
 * JavaScript Fundamentals - Learning Journey
 * 
 * This file documents my learning path with JavaScript basics including:
 * - Arrays and Objects
 * - Nested data structures
 * - Iteration methods (for...of, for...in)
 * - JSON serialization and parsing
 * 
 * Educational purpose: Web development and JavaScript mastery
 * Author: CyberHasan
 */

// ===== Arrays Basics =====
let students = ["Ali", "Hasan", "Zainap"];
console.log(students[2]);
console.log(students.length);

// ===== Objects Basics =====
let user = {
    username: "CyberHasan",
    role: "user",
    isActive: true
};
console.log(user.username);
console.log(user["role"]);

// ===== Array Methods: push() and pop() =====
let cart = ["laptop", "mouse"];
cart.push("keyboard");
console.log(cart);
console.log(cart.length);

let removedItem = cart.pop();
console.log(removedItem);
console.log(cart)

// ===== Nested Objects and Arrays =====
const userProfile = {
    name: "Hasan security",
    address: {
        city: "Karbala",
        street: "AL-Hussein"
    },
    roles: ["read", "write", "admin"]
};

console.log(userProfile.address.city);   // Output: Karbala
console.log(userProfile.roles[2]);       // Output: admin

// ===== for...of Loop (للـ Arrays) =====
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits){
    console.log(fruit);
}

// ===== for...in Loop (للـ Objects) =====
const person = {
    name: "Zainap",
    country: "Iraq",
    city: "Karbala"
};
for (const key in person) {
    console.log(key, person[key]);
}

// ===== JSON Operations =====
const userObj = {
    username: "Ali",
    role: "admin"
};

// تحويل من Object إلى نص (Stringify)
const userstring = JSON.stringify(userObj);
console.log(userstring);
console.log(typeof userstring);

// تحويل من نص إلى Object (Parse)
const userBack = JSON.parse(userstring);
console.log(userBack);
console.log(typeof userBack);
