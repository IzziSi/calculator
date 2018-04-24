var inputOne = '';
var inputTwo = '';
var inputThree = '';
var results = 0;
var delInput = 1;

function inputNumber(number) {
if (inputTwo !== '') {
    inputOne += number;
    document.getElementById('input').value = inputOne;
}
else {
    inputThree += number;
    document.getElementById('input').value = inputThree;
}
}


function inputOperator(operator) {
    inputTwo = operator;
    document.getElementById('input').value = inputTwo;
    delInput = 2;
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
inputOne = '';
inputTwo = '';
inputThree = '';
results = 0;
delInput = 1;
document.getElementById('input').value = results;
}

function delButton() {
    console.log(inputOne);
    inputOne = inputOne.slice(0, -1);
    document.getElementById('input').value = inputOne;
}

document.getElementById('input').value = results;