//step1
function add(a, b) {
    return Number(a) + Number(b);
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
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else {
        return divide(a, b);
    }
}

//step 5

let display = [];

const input = document.querySelector("input");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

const numberBtns = document.querySelectorAll(".numbers");
const operatorBtns = document.querySelectorAll(".operators");


numberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        //console.log(operator);

        if (!operator) {
            firstNumber += btn.textContent;
            input.value = firstNumber;
        } else {
            secondNumber += btn.textContent;
            input.value = secondNumber;
        }
    });
});

operatorBtns.forEach((btn) => {
    btn.addEventListener("click", () => operator = btn.textContent)
})

equal.addEventListener("click", () => {
    result = operate(operator, firstNumber, secondNumber);
    input.value = result;
    firstNumber = result;
    secondNumber = "";
});

clear.addEventListener("click", () => {

    firstNumber = "";
    secondNumber = "";
    operator = "";
    input.value = "";
});
