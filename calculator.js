let buttons = document.querySelectorAll(".button");

let display = document.querySelector(".display");


const operators = ['+', '-', '*', '/'];

let operatorButtons = document.querySelectorAll (".operatorButton")

for (let button of buttons){
    if(button.textContent == "AC"){
        button.addEventListener("click", () => {
            display.textContent = '';
            //reinstall all event listeners back to the operator buttons
            addEventListenerToOperatorButtons();
            //add event listener back to equal

        })
    }

    else if (button.textContent == "="){
        button.addEventListener("click", () => {
            let calculation = display.textContent;
            let calcArr = calculationSplitter(calculation);
            display.textContent = 
            calculator(Number(calcArr[0]), calcArr[1], Number(calcArr[2]));
            //reinstall all event listeners back to the operator buttons
            addEventListenerToOperatorButtons();
            //remove event listener from equal
        })
    }

    else if (operators.includes(button.textContent)){

            button.addEventListener("click", () => {
                //add event listener back to equal
                display.textContent += button.textContent;
                //remove all event listeners on all operator buttons
                for (let operatorButton of operatorButtons) {
                    operatorButton.removeEventListener("click", () => {
                        display.textContent += button.textContent;
                    })
                 }
            })
            


            }
    
    else{
    button.addEventListener("click", () => {
    display.textContent += button.textContent;
    })}

 
    }

 



    


function calculator(num1, operator, num2){
    if(operator == '+'){
        return num1+num2;
    }

    else if (operator == '-'){
        return num1 - num2;
    }

    else if (operator == '*'){
        return num1 * num2;
    }

    else if (operator == '/'){
        return num1/num2;
    }
}

function StringContainsOperator(string){
    for (let operator of operators){
        if(string.includes(operator)){
            return true;
        }
    }

    return false;
}

function addEventListenerToOperatorButtons(){
    for (let operatorButton of operatorButtons){
        operatorButton.addEventListener("click", () => {
            display.textContent += operatorButton.textContent;
        })
    }
}

function calculationSplitter (aString){
    let operatorInCalculation;
    for (let operator of operators){
        if(aString.includes(operator)){
            operatorInCalculation = operator;
        }
    }

    let index = aString.indexOf(operatorInCalculation);

    let calculationArr = [aString.substring(0, index), aString[index], aString.substring(index+1)];

    return calculationArr;

}



