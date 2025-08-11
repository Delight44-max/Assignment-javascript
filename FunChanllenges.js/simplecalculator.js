const prompt = require('prompt-sync')();
let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operation = prompt("Choose '+' or '-': ");

if (operation === "+") {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operation === "-") {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else {
  console.log("Invalid operation!");
}