//define variables
let clear = document.querySelector("#clearButton");
let numButtons = document.querySelectorAll(".numButton");
let outPut = document.querySelector("#outPut")
let equal = document.querySelector("#equal")
let plus = document.querySelector("#addition")
let equalButton = document.querySelector(".equal")



//event listeners
for (let button of numButtons) {
    button.addEventListener('click', (event) => {
        outPut.value += button.innerText
    });
}

clear.addEventListener("click", function() {
    outPut.value = " ";
});

plus.addEventListener("click", function() {
    outPut.value = " ";
});

//register that they work and are being targeted
clearButton.addEventListener('click', (event) => {
    console.log (event.target)
});

equal.addEventListener('click', (event) => {
    console.log (event.target);
});

outPut.addEventListener('click', (event) => {
    console.log (event.target);
});

addition.addEventListener('click', (event) => {
    console.log (event.target);
});