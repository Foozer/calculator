let buttonClick = document.querySelectorAll("button");
let display = document.getElementById("output");
let displayValue = "";
let num1 = null;
let num2 = null;
let nums = ['0','1','2','3','4','5','6','7','8','9','.'];
let symbols = ['+', '-', 'x', '/'];
let op = null;

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

//function for handling which operator has been used
function operate (operator, a, b) {
    let calc = 0;
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
            if (calc == 0)  {
            }
            break;
    }
    display.textContent = '';
    updateDisplay(round(calc,5));
    return (round(calc,5));
}

//this does a nice round of the result to ensure the user gets a nice display with not too many decimals.
function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

// resets the display
function resetDisplay () {
    display.textContent = '';
    displayValue = null;
}

function updateDisplay (id) {
    if ((!isDecimalInNumber(displayValue) && id == '.') || (id !='.')){
        display.textContent += id;
        displayValue = display.textContent;
        if (display.textContent === 'NaN') {
            display.textContent = ('NO ZERO DIVS!');
        }
    }
}

function isDecimalInNumber (num){
    if (displayValue == null) return false;
    return num.includes('.');
}

function getButtonClicks (){
    buttonClick.forEach(button => {
        button.addEventListener('click', (e) => {
            if (op == 'calcdone') {
                resetDisplay();
                op = null;
            }
            if (nums.includes(button.id) && op === null){
                updateDisplay(button.id);
            } else if (nums.includes(button.id) && op != null) {
                updateDisplay(button.id);
                num2 = Number(displayValue);
            } else if (symbols.includes(button.id)) {
                if (num1 == null) {
                    num1 = Number(displayValue);
                    op = button.id;
                    resetDisplay();
                } else {
                    num1 = operate(op, num1, num2)
                    op = button.id;
                    num2 = null;
                    resetDisplay();
                }
            } else if (button.id == '=') {
                operate(op, num1, num2);
                op = 'calcdone';
                num1 = null;
                num2 = null;
            }            
        });
    });
}

getButtonClicks();