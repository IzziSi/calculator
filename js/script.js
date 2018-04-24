var input = [];
var operator = [];
var tempInput = '';
var tempOperator = '';
var results = '';

function inputNumber(number) {
    if (tempOperator === '') {
        tempInput += number;
    } else {
        operator.push(tempOperator);
        tempOperator = '';
        tempInput += number;
    }
    document.getElementById('input').value = tempInput;
}

function inputOperator(operator) {
    if (tempInput === '') {
        tempOperator += operator;
    } else {
        input.push(tempInput);
        tempInput = '';
        tempOperator += operator;
    }
    document.getElementById('input').value = tempOperator;
}


//Does not work - fix
function calculateInputOperator() {
    if (tempInput != '') {
        input.push(tempInput);
        tempInput = '';
    }
    if (tempOperator != '') {
        operator.push(tempOperator);
        tempOperator = '';
    }   
    for (var i = 0; i < input.length; i++) {
        results += parseInt(input.shift());
        if (operator[i] != undefined) {
            results += operator.shift();
        }
        document.getElementById('input').value = eval(results);
    }
}