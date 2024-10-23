//general operate function

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

//basic math functions

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

// populate display 


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let currentValue = '0';

const updateDisplay = function(value) {
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value
    }
    display.textContent = currentValue;
}
buttons.forEach(button => {
    display
})


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        updateDisplay(buttonText);
    });
});


