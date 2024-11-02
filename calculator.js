//step1
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

//step2

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result;

//step3
function operate(operator, a, b) {

    if (operator === "+") {
        return add(a, b);
    }

    else if (operator === "-") {
        return subtract(a, b);

    }
    else if (operator === "*") {
        return multiply(a, b)
    }
    else {
        return divide(a, b)
    }
}




//step 5

let display = [];

const one = document.querySelector("#one");
const input = document.querySelector("input")
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const sum = document.querySelector("#sum")
const minus = document.querySelector("#minus")
const times = document.querySelector("#times")
const division = document.querySelector("#division")
const equal = document.querySelector("#equal")
const clear = document.querySelector("#clear")



one.addEventListener("click", () => {


    display.push(1);
    input.value = display.join('');
})

two.addEventListener("click", () => {
    display.push(2);
    input.value = display.join('');
})

three.addEventListener("click", () => {
    display.push(3);
    input.value = display.join('');
})

four.addEventListener("click", () => {
    display.push(4);
    input.value = display.join('');
})

five.addEventListener("click", () => {
    display.push(5);
    input.value = display.join('');
})

six.addEventListener("click", () => {
    display.push(6);
    input.value = display.join('');
})

seven.addEventListener("click", () => {
    display.push(7);
    input.value = display.join('');
})

eight.addEventListener("click", () => {
    display.push(8);
    input.value = display.join('');
})

nine.addEventListener("click", () => {

    display.push(9);
    input.value = display.join('');
})

zero.addEventListener("click", () => {
    display.push(0);
    input.value = display.join('');

})



sum.addEventListener("click", () => {
    firstNumber = display.pop();
    display.push("+");
    operator = display.pop();

})

minus.addEventListener("click", () => {
    firstNumber = display.pop();
    display.push("-");
    operator = display.pop();
})

times.addEventListener("click", () => {
    firstNumber = display.pop();
    display.push("*");
    operator = display.pop();
})

division.addEventListener("click", () => {
    firstNumber = display.pop();
    display.push("/");
    operator = display.pop();
})



equal.addEventListener("click", () => {
    secondNumber = display.pop();
    result = operate(operator, firstNumber, secondNumber);
    input.value = result;
})

clear.addEventListener("click", () => {
    display.pop();

    input.value = "";
})

