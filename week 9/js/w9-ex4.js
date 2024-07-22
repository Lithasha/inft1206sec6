function showOutput() {
    let number1 = document.querySelector('#first-number').value;
    let number2 = document.querySelector('#second-number').value;
    document.querySelector('#output').style.color = "red";
    

    document.querySelector('#output').textContent = " The multiplication of " + number1 + " and " + number2 + " is " + (number1*number2);
}

document.querySelector('#btn').addEventListener("click", showOutput);