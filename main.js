//define variables
let clear = document.querySelector("#clearButton");
let numButtons = document.querySelectorAll(".numButton");
let outPut = document.querySelector("#outPut")
let equal = document.querySelector("#equal")
let problem = ""

//event listeners
for (let button of numButtons) {
    button.addEventListener('click', (event) => {
        outPut.value += button.innerText
        problem += event.target.innerText
        outPut.value = problem;
    });
}

clear.addEventListener("click", function() {
    outPut.value = " ";
});

equal.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    console.log(typeof problem)
    let answer = math.evaluate(problem)
    outPut.value = answer
    problem = answer
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