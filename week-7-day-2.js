
/*
Task
Write a function capitalize_words(s) which capitalizes every word in the non-null (but possibly empty) string s. A word is defined as a series of characters bordered by space characters and/or the start or end of the string on either side. For the purposes of this challenge, punctuation is considered part of a word as a non-space character.

Any ASCII characters in the inclusive range 0-127 may exist in s. */



function capitalizeWords(s) {
  let words = s.split(/\s+/);
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');

}

const { isNull } = require("lodash");

/**
 * Capitalizes all words in a string.
 *
 * @param {string} s - The string to capitalize words in.
 * @returns {string} The input with words capitalized.
*/
const capitalizeWords = s => {
  
let words = [];
 let currentWord = "";
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ' || s[i] === '\t' || s[i] === '\n' || i === s.length - 1 ) {
      
      currentWord += (i === s.length - 1) ? s[i] : '';
      words.push(currentWord.charAt(0).toUpperCase() + currentWord.slice(1));
      currentWord = '';
    } else {
      currentWord += s[i];
    }
  }
  
  return words.join(' ');
}  
  