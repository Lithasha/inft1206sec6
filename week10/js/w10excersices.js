console.log("Hello ");

// 1. Write a function buildArray that takes two Numbers,and returns an Array filled with all numbers between the given number: buildArray(5, 10) should return 
// [5, 6, 7, 8, 9, 10]

// this is function declaration.
function buildArray(n1,n2) {
    let arr=[]; // this is an empty array.
    for(let i = n1; i<=n2; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(buildArray(5, 10));


// the same exmaple but using function expression.
const buildArray2 = function (n1,n2) {
    let arr=[]; // this is an empty array.
    for(let i = n1; i<=n2; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(buildArray2(5, 10));


// using the arrow function.
const buildArray3 = (n1,n2) => {
    // we are getting the array. thats why we are declaring it.
    let arr=[]; // this is an empty array.
    for(let i = n1; i<=n2; i++) {
        arr.push(i);
    }
    return arr;
};
console.log(buildArray3(5, 10));


// 2. Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number). Your function should return true if all of the ages 
// in the Array are at least as old as the cut-off age: checkAges([16,18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return true.

// function declaration
// we are not declaring an array because it putting values to it.
function checkAges(ages, cutOffAge) {
    for(let i = 0; i < ages.lenth; i++) {
        if (ages[i] < cutOffAge) {
            return false;
        }

    }
    return true;
}
console.log(checkAges([16, 18, 22, 32, 56], 19));
console.log(checkAges([[16, 18, 22, 32, 56], 6]));


// 3. Write a function containsBadWord that takes two arguments: badWords (an Array of words that can’t be used),and userName (a String entered by the user). Check to 
// see if any of the words in badWords are contained within userName. Return the badWord that was found, or null if none are found.

// function declaraion
function containsBadWord(badWord, userName) {
    for(let word of badWord) {
        if (userName.includes(word)) {
            return word;
        }
    }
    return null;
}
console.log(containsBadWord(["hi", "bye", "hello"],  "lisha bye"));


// 4. Write a function that takes a String and checks whether or not it begins with one of "Mr.", "Mrs.", or "Ms.". Return true if it does, otherwise false.

// function declaration.
function stringCheck(words, scentence) {
    for(let word of words) {
        if (scentence.startsWith(word)) {
            return true;
        
        }
    }
    return false;

}
console.log(stringCheck(["Mr.", "Mrs.","Ms."], "Ms. Lily is a doctor."));
