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
    return calc;
}