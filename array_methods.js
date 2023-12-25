
//using splice

const { NOTFOUND } = require("dns");


let arr = ["I", "study", "JavaScript"];

//arr.splice(1, 1, "a new");  //from index 1, remove 1

//splice can also insert elements without any removals
arr.splice(2, 0, "complex", "language");
console.log(arr);

//negative syntax can also be used in splice
let numArr = [1, 2, 5]; 
numArr.splice(-1, 0, 3, 4);
console.log(numArr);


//SLICE

//CONCAT
let concatArr = [1, 2]; 
// create an array from: concatArr and [3, 4]
console.log( concatArr.concat([3,4]) );  //1,2,3,4

// create an array from: concatArr  and [3,4] and [5,6]
console.log(  concatArr.concat([3, 4], [5,6])); //



// concat can copy other objects
let normArr = [1, 2];

let arrLike = {
    0: "something",
    [Symbol.isConcatSpreadable]: true,
    length: 1
};

console.log( normArr.concat(arrLike) );  // 1,2[object Object]


//for each
// takes 3 params item, index, array 
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})


//SEARCHING IN ARRAY
/*
arr.includes returns a boolean if an item is found in the array or not while
indexOf and lastIndefOf returns the index of the items found in the array

*/

/* FINDING AN OBJECT WITH A SPECIFIC CONDITION IN AN ARRAY OF OBJECTS*/
//still takes 3 args, item, index and array
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"},
];

//let user = users.find(items => item.id == 1);

//console.log(user.name)// John 
console.log(users.findIndex(user => user.name == 'John')); 

//find the index of the last John
console.log(users.findLastIndex(user => user.name == 'John')); 

//USING THE FILTER METHOD
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers.length);  
someUsers.forEach((item) => {
    console.log(item.name);
}); 

/* 
arr.findIndex methods has same syntax but returns the index where the elem was found instead of 
the elem itself. If the elem wasn't found, it returns a -1
*/

//filter



//trasform a array
/* 
arr.map is oe of the most useful a ofte used
it call the function for each element of the array and returns the array of results

Syntax 
let result = arr.map(function(item, idex, array) {
     //retur the ew value istead of ite,
}); */

let lengths = ["ildo", "dsglf", "grgr"].map(item => item.length);
console.log(lengths); //5, 7, 6

//sort fuctio /


//usig compare fuctio 
function compareNumeric(a, b) { 
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

let sort_arr = [1, 15, 2 ];
sort_arr.sort(compareNumeric);
console.log(sort_arr);

sort_arr.sort(function(a, b) { return a - b; });
//can also be rewritten as 
sort_arr.sort( (a,b) => a - b );  //arrow function for cleaner(neater) sorting 

//localeCompare can be used to sort strings
let countries = ['Nigeria', 'Ghana', 'Benin Republic', 'Vietnam', 'Angola'];
console.log( countries.sort( (a, b) => a.localeCompare(b)) ); //sorting using localCompare
console.log( countries.sort( (a, b) => a - b) );  ///still works

h 
//split 
let names = 'Bilbo, Gandalf, Nazgul';
let names_arr = names.split(',', 2);

for (let name of names_arr) {
    console.log( `A message to ${name}. `);
}

/* split can also have an optional second numeric argument that limits the number of the array length 

*/
let str = "test";
console.log( str.split('') ) // t,e,s,t
 


//REDUCE METHOD
/* when we need to iterate over an array, we use forEach, for e.t.c

map is used to iterate and return data for each element

arr.reduce and reduceRight are used to calculate a single value based on the array

syntax
let value = arr.reduce(function(accumulator, item, index array) {

}, [initial]);

- As function is applied, the result of the previous function call is passed to the next one as first argument

 */

let redArr = [1, 2, 3, 4, 5];
let result = redArr.reduce((sum, current ) => sum + current,  0);

console.log(result);

//if an array is empty, reduce call will return an error, it is advisable to always include an initial value in an array before calling reduce


//MOST METHODS SUPPORT THE thisArg
/* 

 Almost all array methods that call functions - like find, filter , map , with a notable exception of sort accept an optional additional parameter thisArg
*/

arr.find(func, thisArg);  //e.t.c for othe array methods mentioned above
let army = {
    minAge: 18, 
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let Musers = [
    {aeg: 16},
    {age: 20},
    {age: 23},
    {age: 30}
]

//find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

// the above can be replaced with users.filter(user => army.canJoin(user))


