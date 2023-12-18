/* 
    Question
    Create a JavaScript function named isIsogram that determines whether a given string, s, is an isogram. An isogram is a word that has no repeating letters, whether consecutive or non-consecutive. The function should consider an empty string as an isogram and ignore letter case.

*/




function isIsogram(s) {
    s = s.toLowerCase();
    let uniqueChars = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (uniqueChars.includes(char)) {
            return false;
        } else {
            uniqueChars.push(char);
        }
    }

    return true;
}

//output
console.log(isIsogram("Dermatoglyphics"));  // Output: true
console.log(isIsogram("aba"));              // Output: false
console.log(isIsogram("moOse"));            // Output: false
