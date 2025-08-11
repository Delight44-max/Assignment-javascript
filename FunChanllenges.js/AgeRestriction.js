function ticket() {
  const prompt = require('prompt-sync')();

  let userinput = prompt('Enter your age: ');
  let age = Number(userinput); // Convert input to a number

  const minimum = 10;

  if (age >= minimum) {
    console.log("Welcome to the show!");
  } else {
    console.log("Sorry, you're too young!");
}
}

ticket();