// operate function

let a = 0
let b = 0
let operator = ''

const operate = function(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    } else {
        return "Error"
    }
}

//math functions

const add = function(a,b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    }
    return a / b;
}

