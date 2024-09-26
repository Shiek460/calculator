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


let functions = {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
    divide: divide(),
    equal: evaluate(),
}