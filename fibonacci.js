
//find out the first 20 letters of the fibonnaccil sequence. 
// The first 2 numbers are 1 and 2

const fibonacci = [];
// Assign  the first 2 characters to position 2, and 3 of the arrays as fibonacci sequence does not have any 0 in it
fibonacci[1] = 1;
fibonacci[2] = 1; 

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
} 

for (let i = 1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}


