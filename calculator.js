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

//step3
function operate(operator, a, b) {

    if (operator === '+') {

        return add(a, b);
    }
    else if (operator === "*") {
        return multiply(a, b);
    }
    else if (operator === "/") {
        return divide(a, b);
    }
    else if (operator === "-") {
        return subtract(a, b);
    }
}


//step5
const button = document.querySelectorAll("button")
const input = document.querySelector("#display");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");



button.forEach(btn => {

    input.value = "";
    if (btn1) {
        btn.addEventListener("click", () => {
            // let display = 1;
            //input.value = display;
            //input.value = "";
            //if (btn1) {
            input.value = 1;
            //}

        })

    }

    else if (btn2) {

        btn.addEventListener("click", () => {
            input.value = 2;
        })
    }

})
/*btn1.addEventListener("click", () => {
    // let display = 1;
    //input.value = display;
    //input.value = "";
    if (btn1) {
        input.value = 1;
    }
    //input.value = "";
})*/


/*function populate(){
    input.value="";
    if(btn1){
        input.value = 1;
    }
}*/


