let one = document.querySelector('.one');
let two = document.querySelector('.two');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let addition = document.querySelector('.addition');
const subtraction = document.querySelector('.subtraction');
const equals = document.querySelector('.equals');
// let buttons = document.querySelectorAll('button');


const numberOne = (e) => {
    display.innerHTML = e.target.id;
    return (e.target.id);
}
const addFunction = () => {
    
}

const numberTwo = (e) => {
    display.innerHTML = e.target.id;
    return (e.target.id)
}


clear.addEventListener('click', (e) => {
    display.innerHTML = 0;
})
one.addEventListener('click', numberOne);
two.addEventListener('click', numberTwo);
addition.addEventListener('click', addFunction);


