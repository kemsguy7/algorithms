
//using splice
numbers = [-2, -2 - 1, 0, 1, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(numbers.splice(5, 4));
console.log(numbers);


// Two dimensional and Multi-dimensional arrays
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; i < matrix[i].length; j++) {
            return (matrix[i][j]);
        }
    }
}
console.log(printMatrix(averageTemp));

//multidimensional arrays in js, this prints a 3 by 3 matrix
const matrix3 = [];
for (let i = 0; i < 3; i++) {
    matrix3[i] = []; //we need to iniitialize each array 
    for (let j = 0; j < 3; j++)  {
        matrix3[i][j] = [];
        for (let z = 0; z <3; z++) {
            matrix3[i][j][z] = i + j + z;
        }
    }
}
console.log(matrix3);

let matrix3x3x3 = [];
// To output the content of the matrix above, we can use the following code
for (let i = 0; i < matrix3x3x3.length; i++) {
    for (let j = 0; j < matrix3x3x3[i].length; j++) {
        for (let z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

numbers.forEach(x => console.log(x % 2 === 0));

//using fill to iniitialize arrays
let ones = Array(6).fill(1);
console.log(ones);


//using the copyWithin method
let copyArray = [1,2,3,4,5,6];

//copy the last 3 elems to the first 3 positions
console.log(copyArray.copyWithin(0, 3));

// using a third argument, we can specify stop index
console.log(copyArray.copyWithin(1, 3, 5));
//code above copies 4 , 5 and paste at pos 1

//sorting arrays using compare function

numbers.sort((a, b) => a - b);

function compare(a, b) {
    //same thing as arrow function above
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to be 
    return 0;
  }
numbers.sort(compare);



// Custom sorting an array with objects in it
const friends = [
    { name: 'John', age: 30 },
    { name: 'Age', age: 20 },
    { name: 'Chris', age: 25 }, //trailing comma ES2017
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0; 
}
console.log(friends.sort(comparePerson));


// SORTING STRINGS 
let names = ['Ana', 'ana', 'john', 'John']; 
console.log(names.sort()); //won't print out elems in the correct alpha order  ["Ana", "John", "ana", "john"]

// using comparison function to our sort
// making the sort obey the order of lowercase letters
console.log(names.sort((a, b) => {
    if (a.toLocaleLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLocaleLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));

