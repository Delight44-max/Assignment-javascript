const prompt = require('prompt-sync')();
const adultPrice = 10;
const childPrice = 5;

let age = Number(prompt("Enter your age: "));
if (age >= 18) {
  console.log("Ticket price: $" + adultPrice);
} else {
  console.log("Ticket price: $" + childPrice);
}