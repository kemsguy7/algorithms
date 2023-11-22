
/* 

Write a program that takes in a string and returns the count of each string
*/

/*
function charCount(str) {

    // make object to return at end
    var result = {};
    //loop over string, for each character...
    for (var i = 0; i < str.length; i++) {
        var char = str[i]

        if(result[char] > 0 ) {
            result[char]++;
        } else {
            result[char] = 1;
        };  
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if character is something else (space, period, e.t.c) don't do anything
        //return object at end
        
    }
    return result;
}
console.log(charCount("hello")); 
*/


//refactoring the code above
function charCount(str) {

    var obj = {};
    
    for (var char of str )  {
        
          char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
                obj[char] = ++obj[char] || 1;
            } else {
                obj[char] = 1; 
            };
        }
    }
    return obj;
}
console.log(charCount("hello")); 