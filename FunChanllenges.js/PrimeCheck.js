const prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number: "));
let isPrime = true;

if (num < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime ? "Prime!" : "Not prime!");