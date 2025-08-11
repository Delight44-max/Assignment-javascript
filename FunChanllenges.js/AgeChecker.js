const prompt = require('prompt-sync')();
let age = Number(prompt("Enter your age: "));
let height = Number(prompt("Enter your height in cm: "));

if (age >= 12) {
  if (height >= 140) {
    console.log("Ride allowed!");
  } else {
    console.log("Too short!");
  }
} else {
  console.log("Too young!");
}