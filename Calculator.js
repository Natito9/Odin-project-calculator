
let a = "";
let b = "";
let operator = null
let resetDisplay = false;

const display =document.querySelector(".display");


function add (a,b){
    return a + b;
}
function subtract (a,b){
    return a - b;
}
function multiply (a,b){
    return a * b;
}
function divide (a,b){
    return a / b;
}

function operate(a, operator, b){
    a=parseFloat(a);
    b=parseFloat(b);
    if (operator === "+"){ 
    return add(a,b) 
    }
    else if (operator === "-"){ 
        return subtract(a,b) 
    }
    else if (operator === "x"){ 
            return multiply(a,b) 
    }
    else if (operator === "/"){
        if (b===0) {
            return "Error";
        }
            return divide(a,b) 
    }
}


//attach numbers to A / B
function appendNumber(number){
    if (resetDisplay) {
        display.textContent="";
        resetDisplay = false;
    }
    display.textContent +=number;
    if(!operator){
        a=display.textContent;
    } else{
        b=display.textContent;
    }
}

//choose operato function stores the operator
function chooseOperator(selectedOperator){
    if(operator !==null  && b !== ""){
    calculate();
    }
    operator= selectedOperator;
   resetDisplay = true; //clear display
   
}


//when = is clicked
function calculate(){
    if (operator === null || b === "") return; // Don't calculate if there's no operator or second number
    const result = operate(a, operator,b);
    display.textContent = result;
    
    resetDisplay = true;
    a=result;
    b="";
    operator=null;
}



function clearDisplay(){
    display.textContent ="";
    a="";
    b="";
    operator=null;
    resetDisplay= false;
}

//Function to display buttons text when clicked
document.querySelector('.buttons').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        // Get the clicked button's text
        const buttonValue = event.target.textContent;
        if (!isNaN(buttonValue)) {
            appendNumber(buttonValue);
        } else if (["+", "-", "x", "/"].includes(buttonValue)) {
            chooseOperator(buttonValue);
        }
    }
  
});
// Event listener for "=" button
document.getElementById("result").addEventListener('click', calculate);

// Event listener for "clear" button
document.getElementById("clear").addEventListener('click', clearDisplay);

