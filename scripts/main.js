let buttonClick = document.querySelectorAll("button");
let display = document.getElementById("output");
let displayValue = "";
let num1 = null;
let num2 = null;
let nums = ['0','1','2','3','4','5','6','7','8','9'];
let symbols = ['+', '-', 'x', '/'];
let op = '';

//functions for basic math operations
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    let calc = 0;
    console.log(operator, a, b);
    switch(operator) {
        case '+':
            calc = add(a, b);
            break;
        case '-':
            calc = subtract(a, b);
            break;
        case 'x':
            calc = multiply(a, b);
            break;
        case '/':
            calc = divide(a, b);
            break;
    }
    display.textContent = '';
    updateDisplay(calc);
}

function updateDisplay (id) {
    display.textContent += id;
    displayValue = display.textContent;
    console.log(displayValue);
}

/*
if number buttons are clicked add to the display until a non-number button is hit and the operator variable is empty.
if operator button is hit take the display number and store it in a number variable
    also take the operator and store that in an operator variable
if there is already a number in the number variable and the operator variable is not empty
    store the number variable into num1
if number buttons are clicked add to the display until a non-number button is hit and the operator variable is not empty

*/



function getButtonClicks (){
    buttonClick.forEach(button => {
        button.addEventListener('click', (e) => {
            if (nums.includes(button.id) && op === ''){
                updateDisplay(button.id);
            } else if (nums.includes(button.id)) {
                updateDisplay(button.id);
                num2 = Number(displayValue);
            } else if (symbols.includes(button.id)) {
                if (num1 == null) {
                    num1 = Number(displayValue);
                    op = button.id;
                    display.textContent = '';
                } else {
                    num2 = Number(displayValue);
                }
            } else if (button.id == '=') {
                operate(op, num1, num2);
            }
            
        });
    });
}

getButtonClicks();