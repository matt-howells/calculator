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
        return "no stop";
    }
    return a / b;
}

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


// populate display 


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const numButtons = document.querySelectorAll('.numBtn')

let currentValue = '0';

const maxDisplayLength = 9;

const updateDisplay = function(value) {
    if (currentValue.length >= maxDisplayLength) {
        return;  // Prevent updating the display if the max length is reached
    }
    
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value
    }
    display.textContent = currentValue;
}

let a = '';
let b = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        
        if (button.classList.contains('numBtn')) {
            updateDisplay(buttonText);

        } else if (buttonText === 'AC') {
            
            currentValue = '0';
            a = '';
            b = '';
            display.textContent = currentValue;

        } else if (['+', '-', '*', '/'].includes(buttonText)) {
           
            a = parseFloat(currentValue);
            operator = buttonText;
            currentValue = '0';

        } else if (buttonText === '=') {
           
            b = parseFloat(currentValue);
            const result = operate(a, b, operator);
            
            currentValue = result.length > maxDisplayLength ? result.slice(0, maxDisplayLength) : result;
            display.textContent = currentValue;

            a = '';
            b = '';
            operator = '';

        }
    });
})




