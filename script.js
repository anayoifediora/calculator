const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const textDisplay = document.querySelector('.display');


const displayNumber = (e) => {
    textDisplay.innerHTML = textDisplay.innerHTML + e.target.innerHTML;
}
const clearDisplay = () => {
    textDisplay.innerHTML = '';
}

const displayOperator = (e) => {
    textDisplay.innerHTML = textDisplay.innerHTML + e.target.innerHTML;

}

const compute = () => {
    textDisplay.innerHTML = (eval(textDisplay.innerHTML)).toPrecision(8);
    
}

numberButtons.forEach((button) => {
    button.addEventListener('click', displayNumber);
})
clearButton.addEventListener('click', clearDisplay);

operationButtons.forEach((button) => {
    button.addEventListener('click', displayOperator);
});

equalsButton.addEventListener('click', compute);

