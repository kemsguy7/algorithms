
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

let lengths = ["ildo", "dsglf", "grgr"].map(item.length);
alert(length); //5, 7, 6

