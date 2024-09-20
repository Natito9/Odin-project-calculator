//pseudo code

//Create basic functions for (ADD;SUBSTRACT;MULTOPLY;DIVIDE),
//test on console
//2. Create 3 variables for each of the parts ( 3 + 5)
//3. create function (oparate) that takes an operator and 2 numbers
// then calls one of the functions on the numbers
// 4. add HTML, button for numbers, and opertion and =, clear button
// 5. connect the HTML with java, (STORE THE DISPLAY VALUE) in a variable


// 6. make it work. display the result.
//7. IDK check ODIN

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
    else if (operator === "*"){ 
            return multiply(a,b) 
    }
    else if (operator === "/"){ 
            return divide(a,b) 
    }
    else if (operator === "="){ 
        return calculate() 
}// add c to delete
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
    if(operator !==null  && b !== "") return;
    calculate();

    operator= selectedOperator;
    display.textContent=""; //clear display
   
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
        } else if (["+", "-", "*", "/"].includes(buttonValue)) {
            chooseOperator(buttonValue);
        }
    }
  
});
// Event listener for "=" button
document.getElementById("result").addEventListener('click', calculate);

// Event listener for "clear" button
document.getElementById("clear").addEventListener('click', clearDisplay);

