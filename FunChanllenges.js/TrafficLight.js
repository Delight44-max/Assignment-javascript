function traffic() {

const prompt = require('prompt-sync')();


let userinput = prompt('Enter a colour: red, yellow or red   ');

if(userinput == "red") {
console.log("Stop")
}

else if(userinput == "green") {
console.log("go")
}

else {

console.log("wait")
}
}

traffic()
