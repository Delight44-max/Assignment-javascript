const prompt = require('prompt-sync')();
const myAnimal = "dog";
let guess = prompt("Guess the animal: ");
if (guess.toLowerCase() === myAnimal) {
  console.log("Correct! It's a dog!");
} else {
  console.log("Nope, it's a dog!");
}