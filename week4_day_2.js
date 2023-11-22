/*
    In this example, the function maskNumber takes a number as input, converts it to a string, 
    and then replaces all digits except the last 4 with "#" if the number has more than 4 digits. 
    If the number has 4 or fewer digits, it returns the number as is. The example usage demonstrates 
    how to call this function with an original number and print the result.

*/


function maskNumber(number) {
    // Convert the number to a string to manipulate individual digits
    let numberStr = number.toString();
  
    // Check if the number has more than 4 digits
    if (numberStr.length > 4) {
      // Replace all digits except the last 4 with '#'
      let maskedNumber = "#".repeat(numberStr.length - 4) + numberStr.slice(-4);
  
      return maskedNumber;
    } else {
      // If the number has 4 or fewer digits, return it as is
      return numberStr;
    }
  }
  
  // Improved version using padStart
  function maskNumberWithPadStart(number) {
    // Convert the number to a string to manipulate individual digits
    let numberStr = number.toString();
  
    // Check if the number has more than 4 digits
    if (numberStr.length > 4) {
      // Use padStart to add '#' to the beginning of the string
      let maskedNumber = numberStr.slice(-4).padStart(numberStr.length, '#');
  
      return maskedNumber;
    } else {
      // If the number has 4 or fewer digits, return it as is
      return numberStr;
    }
  }
  
  // Example usage:
  let originalNumber = 1234567890;
  let maskedResult = maskNumberWithPadStart(originalNumber);
  console.log(maskedResult);
  