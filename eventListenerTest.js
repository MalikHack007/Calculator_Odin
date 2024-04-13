let buttons = document.querySelectorAll(".testButton");

addEventListenerToAllButtons();






function clickHandlerButton(event){
        colorChange(event.target);
        removeEventListenersFromAllButtons();
}

function colorChange (button){
        button.style.backgroundColor = "black";
        console.log("color is changed")
}

function addEventListenerToAllButtons(){
    for (let button of buttons){
        button.addEventListener("click", clickHandlerButton);
    }
}

function removeEventListenersFromAllButtons(){
    for (let button of buttons){
        button.removeEventListener("click", clickHandlerButton);
    }
}