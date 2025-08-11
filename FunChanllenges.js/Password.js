
const prompt = require('prompt-sync')();


function askPassword() {

let userinput = prompt("enter the secret password to access  "  )

const getnumber = "secret123"

if(userinput == getnumber){

console.log("Access granted! Welcome!")

}

else {

console.log("Access denied!")
}
}

askPassword()

