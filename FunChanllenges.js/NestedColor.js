const prompt = require('prompt-sync')();
let color = prompt("Enter a color: ").toLowerCase();

if (color === "red") {
  for (let i = 0; i < 3; i++) {
    console.log("Red is awesome!");
  }
} else {
  console.log("I like red better!");
}