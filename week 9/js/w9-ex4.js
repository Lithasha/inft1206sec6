// defining the function.
function showOutput() {
    // Get the value of the first number input field
    let number1 = document.querySelector('#first-number').value;
    // Get the value of the second number input field
    let number2 = document.querySelector('#second-number').value;
    // Set the color of the output text to green
    document.querySelector('#output').style.color = " green";
    
    // Calculate the multiplication of the two numbers and set the output text content
    document.querySelector('#output').textContent = " The multiplication of " + number1 + " and " + number2 + " is " + (number1*number2);
}
// Add an event listener to the button to call the showOutput function when clicked.
document.querySelector('#btn').addEventListener("click", showOutput);