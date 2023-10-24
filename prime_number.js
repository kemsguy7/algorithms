/*  

Given a natural number 'n', determine if the number is prime or not

A prime number is a natural number greater than 1 that is not a product of 2 smaller natural numbers

e.g isPrime(5) = true (1*5 or 5 * 1)
isPrime(4) = false (1 * 4 or 2 * 2 or 4 *1)
*/


function isPrime(n) {

    if (n < 2) {
        return false;
    }
    
    for (let i = 2; i < n; i++) {
        if (n % i === 0) { //if the number is divisble by any number below it with a remainder of 0, it is not a prime number 
            return false;
        }
    }
    return true;  //else return true if the number 
}


console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime(3));