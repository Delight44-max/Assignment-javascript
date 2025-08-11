function getNumber(){
const prompt = require('prompt-sync')();


let userinput = prompt("guess a number ")

const getnumber = "7";

if(userinput == getnumber){
console.log("thats my favourite number")
}

else {
console.log("nice try guess again")
}
}
getNumber()


