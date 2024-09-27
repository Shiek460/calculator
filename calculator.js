let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
//Add Event Listeners to 'number' buttons, to add to the display.
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if (display.textContent == '0') {
            display.textContent = number.textContent;
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
});
let divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    calledFunction.function = 'divide';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
});
let add = document.querySelector('#add');
add.addEventListener('click', () => {
    calledFunction.function = 'add';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
});
let subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    calledFunction.function = 'subtract';
    calledFunction.firstVariable = display.textContent;
    display.textContent = '0';
});
let evaluate = document.querySelector('#evaluate');
evaluate.addEventListener('click', () => {
    calledFunction.secondVariable = display.textContent;
    display.textContent = functions[calledFunction.function](
        calledFunction.firstVariable, calledFunction.secondVariable);
    calledFunction = {
        function: '',
        firstVariable: '',
        secondVariable: '',
    }
});

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
    equal: function(operation, a, b) {
        operation(a, b);
    },
}