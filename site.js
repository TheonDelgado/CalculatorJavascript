const inputArray = [];
let plusIsActive = false;
let subtractIsActive = false;
let multiplyIsActive = false;
let divideIsActive = false;

const inputElement = document.querySelector("input");
const numbers = document.querySelectorAll(".number");

for(let number of numbers) {
    number.addEventListener('click', function() {

        inputElement.value += number.innerText;
    })
}

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', function() {
    
    inputElement.value = "";
    clearCalculator();
});

const plusButton = document.querySelector(".plus");
plusButton.addEventListener('click', function() {

    if(inputElement.value === "") { return; }
    if(divideIsActive) { return; }
    if(multiplyIsActive) { return; }
    if(subtractIsActive) { return; }

    plusButton.style.backgroundColor = "green";
    plusIsActive = true;

    inputArray.push(inputElement.value);
    inputElement.value = '';
})

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener('click', function() {
    if(inputElement.value === "") { return; }
    if(plusIsActive) { return; }
    if(multiplyIsActive) { return; }
    if(subtractIsActive) { return; }

    subtractButton.style.backgroundColor = "green";
    subtractIsActive = true;

    inputArray.push(inputElement.value);
    inputElement.value = '';
})

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener('click', function() {
    if(inputElement.value === "") { return; }
    if(plusIsActive) { return; }
    if(subtractIsActive) { return; }
    if(divideIsActive) { return; }

    multiplyButton.style.backgroundColor = "green";
    multiplyIsActive = true;

    inputArray.push(inputElement.value);
    inputElement.value = '';
})

const divideButton = document.querySelector(".divide");
divideButton.addEventListener('click', function() {
    if(inputElement.value === "") { return; }
    if(plusIsActive) { return; }
    if(subtractIsActive) { return; }
    if(multiplyIsActive) { return; }

    divideButton.style.backgroundColor = "green";
    divideIsActive = true;

    inputArray.push(inputElement.value);
    inputElement.value = '';
})

const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', function() {

    inputArray.push(inputElement.value);

    if(plusIsActive) {
        inputElement.value = parseInt(inputArray[0]) + parseInt(inputArray[1]);
    }
    if(subtractIsActive) {
        inputElement.value = parseInt(inputArray[0]) - parseInt(inputArray[1]);
    }
    if(multiplyIsActive) {
        inputElement.value = parseInt(inputArray[0]) * parseInt(inputArray[1]);
    }
    if(divideIsActive) {
        inputElement.value = parseInt(inputArray[0]) / parseInt(inputArray[1]);
    }

    clearCalculator();
})

const signButton = document.querySelector(".sign");
signButton.addEventListener('click', function() {
    let newValue = parseInt(inputElement.value);

    inputElement.value = -newValue;
})

function clearCalculator() {
    inputArray.splice(0, inputArray.length);

    plusIsActive = false;
    subtractIsActive = false;
    multiplyIsActive = false;
    divideIsActive = false;

    plusButton.style.backgroundColor = "#3666e0";
    subtractButton.style.backgroundColor = "#3666e0";
    multiplyButton.style.backgroundColor = "#3666e0";
    divideButton.style.backgroundColor = "#3666e0";
}

