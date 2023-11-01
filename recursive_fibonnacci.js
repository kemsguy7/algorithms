

// GIVEN A NUMBER N, FIND THE NTH ELEMENT OF THE FIBONACCI SEQUENCE

/* 
   In maths, the fibonacci sequence is a sequence in which each number is the sum of th

Fn = Fn-1 + Fn-2
F0 = 0 and F1 = 1
F2 = F1 + F0
   */

  function recursiveFibonacci(n) {
    if (n < 2) {  //base case so the function does not run infinitely  since first and second number of the fib sequence is 0 an 1
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

  }

  console.log(recursiveFibonacci(0));
  console.log(recursiveFibonacci(1));
  console.log(recursiveFibonacci(6));
  