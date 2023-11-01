/* 
PROBLEM
Given an integer 'n', find the factorial of that integer

In mathematics, the factorial of a non-negative integer 'n' denoted n! 
is product of all positive integers less than or equal to n

factorial of 0 is 1

FIND THE RECURSIVE FACTORIAL


5! = 5*4*3*2*1
4! = 4*3*2*1
3! = 3*2*1
2! = 2*1

factorial of n is n! = n * (n-1)!
*/

/* TIPS FOR RECURSIVE SOLUTIONS

    1. Figure out how to brak down the problem into smaller versions of the same problem
    2. identify the base case for recursion
*/

function recursiveFactorial(n) {
    if ( n === 0) {      //base case
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(7));
