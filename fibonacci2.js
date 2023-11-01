
/*
FIBONACCI SEQUENCE
Given a number ’n’, find the first ’n’ elements of the Fibonacci sequence

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

The first 2 numbers in the sequence are 0 and 1
fibonacci(2) = [0, 1]
fibonacci(3) = [0,1,1]
fibonacci(7) = [0,1,1,2,3,5,8]
*/

function fibonacci(n) { //in
    let fib = [0, 1];  //the first 2 number in the fibonacci sequence are 0 and 1
    for(let i = 2; i < n; i++) {  //loop starts at 2 because in arrays, pos 3 is [2] 
        fib[i] = fib[i - 1] + fib[i - 2]; //this gets the next sequence by subtracting from the previous element
    }
    return fib;
}


console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]






