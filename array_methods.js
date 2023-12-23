
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
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
})