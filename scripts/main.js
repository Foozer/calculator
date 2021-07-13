let buttonClick = document.querySelectorAll("button");
let display = document.getElementById("output");
let displayValue = "";
let leftNum = 0;
let rightNum = 0;
let nums = ['0','1','2','3','4','5','6','7','8','9'];
let symbols = ['+', '-', 'x', '/'];

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
    switch(operator) {
        case '+':
            calc = add(a, b);
            break;
        case '-':
            calc = subtract(a, b);
            break;
        case '*':
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

function getButtonClicks (){
    buttonClick.forEach(button => {
        button.addEventListener('click', (e) => {
            if (nums.includes(button.id)){
                updateDisplay(button.id);
            } else if (symbols.includes(button.id)) {
                leftNum = Number(displayValue);
                op = button.id;
            } else if (button.id == '=') {
                operate(op, leftNum, rightNum);
            }
            
        });
    });
}

getButtonClicks();