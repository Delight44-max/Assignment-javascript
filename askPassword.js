const readline = require("readline").createInterface({
input: process.stdin,
output: process.stdout
});


function askPassword() {
readline.question("Enter your password: ", function(password) {
let hasLetter = false;
let hasNumber = false;

for (let char of password) {
if (/[a-zA-Z]/.test(char)) {
hasLetter = true;
} else if (/[0-9]/.test(char)) {
hasNumber = true;
}
}

if (password.length < 8) {
console.log("Password must be 8 characters long");
askPassword();
} else if (hasLetter && hasNumber) {
console.log("Strong password");
readline.close();
} else if (hasLetter || hasNumber) {
console.log("Medium password, try again");
askPassword();
} else {
console.log("Invalid password!");
askPassword();
}
});
}

askPassword();