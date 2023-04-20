let clearButton =
document.querySelector("#clearButton");
console.log (clearButton)

clearButton.addEventListener('click', (event) => {
    console.log (event.target)
});

let numButtons = 
document.querySelectorAll(".numButton");

for (let button of numButtons) {
    button.addEventListener('click', (event) => {
        console.log (event.target)
    });
}



// for (let button of numButtons) {
//     button.addEventListener("click", (event) => {
//         display (event.target.value)
//     })
// }

// for (let button of output) {
//     button.addEventListener("click", (event) =>
//     {
//         console.log(event.target.innerText);
//     });
//     featureDisplay.innerText =
//     even.target.innerText
// }
