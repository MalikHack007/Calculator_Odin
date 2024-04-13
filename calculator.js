let result = 0;

let currentOperator = "+";

let currentNumber = NaN;

let display = document.querySelector(".display");

display.textContent = result;

let isInitialized = true;

const buttons = document.querySelectorAll(".button");

const operators = ["+", "-", "*", "/"];

for(let button of buttons){
    if(button.textContent == "="){
        button.addEventListener("click", equalClickHandler);
    }

    else if (operators.includes(button.textContent)){
        button.addEventListener("click", operatorClickHandler);
    }

    else if (button.textContent == "AC"){
        button.addEventListener("click", allClearClickHandler);
    }

    else{
        button.addEventListener("click", numberClickHandler);
    }
}

function operatorClickHandler(event){
    if(!Number.isNaN(currentNumber)){
        // console.log("currentNumber != NaN executed")
        console.log(`result: ${result}`);
        console.log(`currentOperator: ${currentOperator}`);
        console.log(`currentNumber: ${currentNumber}`);
        result = calculator(result, currentOperator, currentNumber);
        console.log(`(after calculation)result: ${result}`);
        currentNumber = NaN;
        console.log(`currentNumber(after calculation): ${currentNumber}`);
        currentOperator = event.target.textContent;
        console.log(`currentOperator: ${currentOperator}`);
        display.textContent = result + currentOperator;
        isInitialized = false;
    }

    else{
        currentOperator = event.target.textContent;
        console.log(`currentNumber=NaN, result: ${result} operator: ${currentOperator}`);
        display.textContent = result + currentOperator;
        isInitialized = false;
    }
}

function numberClickHandler(event){
    if(isInitialized == false && !Number.isNaN(currentNumber)){
        console.log(`currentNumber (before): ${currentNumber}`);
        currentNumber += event.target.textContent;
        console.log(`currentNumber (firstScenarioTriggered):${currentNumber} `);
        display.textContent += event.target.textContent; 
    }

    else if(isInitialized == false && Number.isNaN(currentNumber)){

        currentNumber = "";
        currentNumber += event.target.textContent;
        console.log(`currentNumber: ${currentNumber}`);
        display.textContent += event.target.textContent;
    }

    else if(isInitialized == true){
        isInitialized = false;
        currentNumber = event.target.textContent;
        display.textContent = currentNumber;
    }
}

function equalClickHandler(){
    if(!Number.isNaN(currentNumber)){
        result = calculator(result, currentOperator, currentNumber);
        display.textContent = result;
        currentOperator = "+";
        currentNumber = NaN;
        isInitialized = true;
    }

    else{

        display.textContent = result;
        currentOperator = "+";
        currentNumber = NaN;
        isInitialized = true;

    }
}

function allClearClickHandler(){
    result = 0;

    currentOperator = "+";

    currentNumber = NaN;
    display.textContent = result;

    isInitialized = true;
}



function calculator(num1, operator, num2){
    if(operator == '+'){
        return num1 + Number(num2);
    }

    else if (operator == '-'){
        return num1 - Number(num2);
    }

    else if (operator == '*'){
        return num1 * Number(num2);
    }

    else if (operator == '/'){
        return num1 / Number(num2);
    }
}









