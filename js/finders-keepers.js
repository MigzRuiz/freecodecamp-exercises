/*

Basic Algorithm Scripting: Finders Keepers
    Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

    - findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
    - findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

*/

/** My Solution */
function findElement (arr, func){
    let num = [];
    arr.forEach(element => {
        if(func(element)){
            num.push(element);
        }
    });
    return num[0];
}

/** Optimal Solution */
/**
    The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned. */

function findElementOptimal (arr, func){
    return arr.find(func);
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0}));
console.log(findElementOptimal([1, 3, 5, 8, 9, 10], function(num) {return num % 2 === 0}));