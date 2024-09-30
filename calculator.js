let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
//Add Event Listeners to 'number' buttons, to add to the display.
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent == '0') {
            display.textContent = number.textContent;
            clear.textContent = 'C'
        } else {
            display.textContent += number.textContent;
        }
    });
});

let multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    calledFunction.function = 'multiply';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
    clear.textContent = 'C'
});
let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    calledFunction.function = 'divide';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
    clear.textContent = 'C'
});
let add = document.querySelector('#add');
add.addEventListener('click', () => {
    calledFunction.function = 'add';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
    clear.textContent = 'C'
});
let subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    calledFunction.function = 'subtract';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
    clear.textContent = 'C'
});
let equal = document.querySelector('#evaluate');
equal.addEventListener('click', evaluate);

function evaluate() {
    if (calledFunction.secondVariable == '0' && calledFunction.function == 'divide') {
        alert("Try Again. Can't divide by zero!");
    } else {
        calledFunction.secondVariable = display.textContent;
        display.textContent = functions[calledFunction.function](
            calledFunction.firstVariable, calledFunction.secondVariable);
        calledFunction = {
            function: '',
            firstVariable: display.textContent,
            secondVariable: '',
        }
        clear.textContent = 'CE'
    }
}

let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    if (clear.textContent == 'C') {
        display.textContent = '0';
        clear.textContent = 'CE'
    } else {
        calledFunction = {
            function: '',
            firstVariable: '',
            secondVariable: '',
        };
        display.textContent = '0';
    }
});

let abs = document.querySelector("#abs");
abs.addEventListener('click', () => {
    display.textContent *= -1;
});

let percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    display.textContent *= .01;
});

let backspace = document.querySelector('#backspace');
backspace.addEventListener('click', removeLast)

let calledFunction = {
    function: '',
    firstVariable: '',
    secondVariable: '',
};

let functions = {
    add: function(a, b) {return parseFloat(a) + parseFloat(b)},
    subtract: function(a, b) {return a - b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b},
}

function removeLast() {
    let numbers = Array.from(display.textContent);
    display.textContent = ''
    if (numbers.length > 1) {
        numbers.pop();
    } else {
        numbers = [0];
    }
    for (let i = 0; i < numbers.length; i++) {
        display.textContent += numbers[i];
    }
}