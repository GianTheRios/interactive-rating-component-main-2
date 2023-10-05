
const numbers = document.querySelectorAll('.numbers');
const button = document.querySelector('#btn');
const card2 = document.querySelector('#card2');
let prevClicked = null;

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // If there's a previous clicked button, change it back to dark gray
    if (prevClicked) {
        prevClicked.style.backgroundColor = "#3b4151";
    }
    // Change the clicked button to light gray
    event.target.style.backgroundColor = "grey";

    // Set the current clicked button to the previous clicked button
    prevClicked = event.target;

    console.log('number is pressed');

  })
})

// Hover effect for non-clicked buttons
numbers.addEventListener("mouseover", (event) => {
    if (event.target !== prevClicked) {
        event.target.style.backgroundColor = "#ff9e37"
    }
});

// event listener for button
button.addEventListener("click", () => {
    console.log('button is pressed');
});


