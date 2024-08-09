// defining a function.
function showOutput() {
    // Get the value of the input field with id 'first-name'
    let name = document.querySelector('#first-name').value;

    // Set the text content of the element with id 'output' to "Hello " followed by the name
    document.querySelector('#output').textContent = "Hello " + name;
    // Change the text color of the element with id 'output' to yellow
    document.querySelector('#output').style.color = "yellow";
}
// Add an event listener to the button with id 'btn' that calls showOutput when clicked
document.querySelector('#btn').addEventListener("click", showOutput);