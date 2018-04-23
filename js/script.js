var inputOne;
var inputTwo;
var inputThree;
var results = 0;
//var beforeResults=0;


function inputNumber(number) {
if (inputTwo=== undefined) {
    inputOne += number;
    document.getElementById('input').value = inputOne;
}
else {
    inputThree += number;
  //  beforeResults = parseInt(inputOne) + inputTwo + parseInt(inputThree);
    //document.getElementById('input').value = beforeResults;
}
}


function inputOperator(operator) {
    inputTwo = operator;
    //beforeResults = parseInt(inputOne) + parseInt(inputTwo);
    //document.getElementById('input').value = beforeResults;
    }
    
function calculateInputs() {
switch (inputTwo) {
    case '/':
    results = parseInt(inputOne) / parseInt(inputThree);
    document.getElementById('input').value = results;
    break;
    case '*':
    results = parseInt(inputOne) * parseInt(inputThree);
    document.getElementById('input').value = results;
    break;
    case '-':
    results = parseInt(inputOne) - parseInt(inputThree);
    document.getElementById('input').value = results;
    break;
    case '+':
    results = parseInt(inputOne) + parseInt(inputThree);
    document.getElementById('input').value = results;
    break;
    case '%':
    results = parseInt(inputOne) % parseInt(inputThree);
    document.getElementById('input').value = results;
    break;
    default:
    results = 0;
    document.getElementById('input').value = results;
}
}

function clear() {
inputOne = undefined;
inputTwo = undefined;
inputThree = undefined;
results = 0;
//beforeResults=0;
}

document.getElementById('input').value = results;