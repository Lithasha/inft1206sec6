function showOutput() {
    let name = document.querySelector('#first-name').value;

    document.querySelector('#output').textContent = "Hello " + name;
    document.querySelector('#output').style.color = "yellow";
}

document.querySelector('#btn').addEventListener("click", showOutput);