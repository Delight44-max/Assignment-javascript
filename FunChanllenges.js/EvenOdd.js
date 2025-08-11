function getEvenOdd(){

const prompt = require('prompt-sync')();
    

let userinput = prompt('Enter your number: ');  

if(userinput % 2 == 0){
console.log("its an Even number")
}
else {

console.log("its an odd number")
}
}

getEvenOdd()

