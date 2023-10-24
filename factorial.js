/* 
PROBLEM
Given an integer 'n', find the factorial of that integer

In mathematics, the factorial of a non-negative integer 'n' denoted n! 
is product of all positive integers less than or equal to n

factorial of 0 is 1
*/

function factorial(n) {
    let result = 1; // starts at 1 because the factorial of 0 is 1
    for (let i = 2; i <=n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));



