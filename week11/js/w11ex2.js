console.log("Hello");

// this will work after the window or the browser loads. window means the web browser. onload means waiting till the window loads.
window.onload = function () {
    // Event handling 
//ex 1
document.querySelector('#btn2').onclick=function() {
    console.log("Durham College!!!")
};

// ex 2
document.querySelector('#btn2').onclick=function() {
    console.log("Lithasha!!!")
};// from these two examples it will print the second function when the button is cliscked. because it is overriding.


// when event listener is used overide does not happen. we can have many times we want.
document.querySelector('#btn3').addEventListener('click',function(){
    console.log("Using Event Listener");
});

document.querySelector('#btn3').addEventListener('click',function(){
    console.log("INFT 1206");
});

};
