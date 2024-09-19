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

let a = 1;
let b = 2;
let operator = null


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

function operate(a,operator,b){
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
}

console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));

console.log(operate(a,"+",b));
