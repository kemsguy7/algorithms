/* 
Write the function camelize(str) that changes dash-separated words like “my-short-string”
 into camel-cased “myShortString”.
*/


function camelize(str) {
    return str.split("-")
    .map( 
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['My', 'Long', 'Word']
        (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color"));



/* 
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
*/
