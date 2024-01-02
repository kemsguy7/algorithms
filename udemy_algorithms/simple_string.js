
// Write a funciton that takes in a string and returns count of each character in that string


function countStr(str) {

    let result = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if(result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1
        }
    }
    return result;
}

function countChar(str) {

    //make object to return at end
    const result = {}; 

    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        //if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        } 
        // if the char is a number/letter AND is not in object, add it to object and set value to 1

        else {
            result[char] = 1;
        };
    }

    // if character is something else (Space, period e.t.c) don't do anything
    //return object at end
    return result;
}

console.log(countChar("efeggrgr rgrhr rhr hrhrr 9rrgrr049t4900"));
console.log(countStr("efeggrgr rgrhr rhr hrhrr 9rrgrr049t4900"));