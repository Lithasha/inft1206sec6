/* defining  a function*/
function showGreetingMessage() {
    let name = window.prompt("What is your name?");
    /* we use '+' mark to concatinate*/
    window.alert("Hello " + name);

}

// showGreetingMessage();

// querySelector???????? 
// addEventListener?????/
document.querySelector("#btn").addEventListener("click",showGreetingMessage);