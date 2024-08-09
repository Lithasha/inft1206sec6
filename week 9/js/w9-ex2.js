/* defining  a function*/
function showGreetingMessage() {
    // this will pop up a aler window asking the name of the user.
    let name = window.prompt("What is your name?");
    /* we use '+' mark to concatinate*/
    window.alert("Hello " + name);

}

// showGreetingMessage();

/* querySelector - The Document method querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors. 
                   If no matches are found, null is returned. */
/* addEventListener - The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the 
                    target. Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as IDBRequest).
                    It allows adding more than one handler for an event. Useful for any kind of code that needs to work well with other libraries or extensions.
                    The method addEventListener() works by adding a function, or an object that implements a handleEvent() function, to the list of event listeners for 
                    the specified event type on the EventTarget on which it's called. */
// 'document.querySelector' this method selects the HTML element with the 'id' of 'btn'.
/* 'addEventListener("click",showGreetingMessage)' this method adds an event listener to the selected element (the button in this case). 
The event listener listens for a 'click' event. When the button is clicked then the fuction will run.*/
document.querySelector("#btn").addEventListener("click",showGreetingMessage);