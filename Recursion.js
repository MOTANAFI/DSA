// RECURSION
// Recursion is a technique for iterating over an operation by having
// a function call itself repeatedly until it arrives at a result.
// But it doesn't call itself exactly the same way each time.


// function countDonwn(num) {
//     if(num === 0) {
//         console.log('All done!');
//         return
//     }

//     console.log(num);
//     countDonwn(num - 1);
// }

// countDonwn(10);

// Factorial

function factorial(number) {
    if(number === 0) return 1;
    return number * factorial(number - 1);
}

console.log(factorial(4));