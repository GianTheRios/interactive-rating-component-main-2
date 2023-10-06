
const numbers = document.querySelectorAll('.numbers');
const button = document.querySelector('#btn');
const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');
const selectedSpan = document.querySelector('#selected-number');


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


  })
})

// Event Listener for the button

button.addEventListener('click', () => {
  if (prevClicked) {
    card.classList.remove('active');  // hide the rating card
    card2.classList.add('active');  // show the thank you card
    selectedSpan.innerHTML = prevClicked.innerHTML;  // Set the selected number
  } else {
    alert('Please select a number');
  }
});