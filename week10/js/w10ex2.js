console.log("Hello ");

// scope of the variables.

// 1) - Global scope = this variable is accessible everywhere. because this is global.
// a - Any variable declared using 'var' keyword or 'let' keyword outside the functions.
// b - Any variable declared WITHOUT 'var' or 'let' or 'const' keyword, this variable is global.

var g = 10;
//let g = 10; var and let keyword is the samething.
console.log("(outside the function)g = "+g )

function todo() {
    console.log("(inside the function)g ="+g);
}

todo();


console.log("(outside the function)g = "+g )

function todo() {
    console.log("(inside the function)g ="+g);
    let a = 5;
    console.log("(inside the function)a ="+a);

    {   // this is the function
        var b = 22;
        console.log("(inside the block)b ="+b);

        // this is the block scope 
        let c = 100;
        console.log("(inside the block)c ="+c);

    }
    console.log("(outside the block)b ="+b); // this is correct because it is still inside the function.
    // console.log("(outside the block)c ="+c);

    d = 150;

}

todo();
console.log("(outside the function)d ="+d);




// 2) - Function Scope/ Local Scope 
// a - Any variable declared using 'var' keyword inside the functions.

var g = 10;
//let g = 10; var and let keyword is the samething.
console.log("(outside the function)g = "+g )

function todo() {
    console.log("(inside the function)g ="+g);
    let a = 5;
    console.log("(inside the function)a ="+a);

    {
        var b = 22;
        console.log("(inside the block)b ="+b);
    }
    console.log("(outside the block)b ="+b); // this is correct because it is still inside the function.
}

todo();
// console.log("(outside the function)a = "+a ) - this wont work for the function scope because it is outside the function.



// 3) Block Scope 
// a - Any variable declared using the ' let' keyword inside the block.

var g = 10;
//let g = 10; var and let keyword is the samething.
console.log("(outside the function)g = "+g )

function todo() {
    console.log("(inside the function)g ="+g);
    let a = 5;
    console.log("(inside the function)a ="+a);

    {   // this is the function
        var b = 22;
        console.log("(inside the block)b ="+b);

        // this is the block scope 
        let c = 100;
        console.log("(inside the block)c ="+c);

    }
    console.log("(outside the block)b ="+b); // this is correct because it is still inside the function.
    console.log("(outside the block)c ="+c);
}

todo();