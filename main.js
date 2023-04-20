//define variables
let clearButton = document.querySelector("#clearButton");
let numButtons = document.querySelectorAll(".numButton");
let outPut = document.querySelector("#outPut")
let equal = document.querySelector("#equal")

//register that they work and arre being targeted
clearButton.addEventListener('click', (event) => {
    console.log (event.target)
});

equal.addEventListener('click', (event) => {
    console.log (event.target);
});

outPut.addEventListener('click', (event) => {
    console.log (event.target);
});

//functions
const calculate = function(formula){
    let result = eval(formula)
    outPut.value = result
}


//event listeners
for (let button of numButtons) {
    button.addEventListener('click', (event) => {
        outPut.value += button.innerText
    });
}

// for (let clear of clearButton) why should you not use a for loop here?
    clearButton.addEventListener('click', (event) => {
        outPut.value += '  ';
    });    