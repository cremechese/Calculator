const buttons = document.getElementsByTagName("button");
const numbers = document.getElementsByClassName("number");
const screen = document.getElementById("screen");

const clear = buttons[0];
const signChange = buttons[1];
const percent = buttons[2];
const div = buttons[3];
const seven = buttons[4];
const eight = buttons[5];
const nine = buttons[6];
const mult = buttons[7];
const four = buttons[8];
const five = buttons[9];
const six = buttons[10];
const sub = buttons[11];
const one = buttons[12];
const two = buttons[13];
const three = buttons[14];
const add = buttons[15];
const del = buttons[16];
const zero = buttons[17];
const dec = buttons[18];
const equal = buttons[19];

let enteredNumber = "0";
let secondInput = "0";
let decimalMode = false;
let addMode = false;
let subMode = false;
let multMode = false;
let divMode = false;
let firstPass = false;
let firstInput = "0";

for(i = 0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", function(event) {
        enteredNumber = enteredNumber + event.target.innerHTML;
        screen.innerHTML = parseFloat(enteredNumber);
        console.log(enteredNumber);
        console.log(parseFloat(enteredNumber));
    });

}

clear.addEventListener("click", function(event) {
    enteredNumber = "0";
    firstInput = "0";
    secondInput = "0";
    screen.innerHTML = parseFloat(enteredNumber);
})

del.addEventListener("click", function(event){
    if(enteredNumber.length>1) {
        enteredNumber = enteredNumber.substring(0, enteredNumber.length - 1);
    }
    screen.innerHTML = parseFloat(enteredNumber);
    console.log(enteredNumber);
})

dec.addEventListener("click", function(event){

    if(decimalMode == false) { 
        enteredNumber = enteredNumber + event.target.innerHTML;
        screen.innerHTML = parseFloat(enteredNumber);
    }
    decimalMode = true;
})

add.addEventListener("click", function(event){
    firstInput = enteredNumber;
    enteredNumber = "0";
    addMode = true;
    firstPass = true;
    subMode = false;
    multMode = false;
    divMode = false;
})

equal.addEventListener("click", function(event){
    if (addMode == true){
        if(firstPass == true){
            secondInput = enteredNumber;
            enteredNumber = firstInput;
        }
        firstPass = false;
        enteredNumber = addition(parseFloat(enteredNumber),parseFloat(secondInput));
    }
    screen.innerHTML = parseFloat(enteredNumber);
})


function addition(x, y) {
    return Math.round((x+y)*10000)/10000;
}