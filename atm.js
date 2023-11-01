/*Task
An ATM only has 100, 50 and 20 dollar bills (USD) available to be dispensed.

Given an amount between 40 and 10000 dollars (inclusive) and assuming that the ATM wants to use as few bills as possible, determinate the minimal number of 100, 50 and 20 dollar bills the ATM needs to dispense (in that order).

Here is the specification for the withdraw method you'll complete:

withdraw(amount)
Parameters
amount: Number - Amount of money to withdraw. Assume that the amount is always divisible into 100, 50 and 20 bills.

Return Value
Array<Number> - An array of 3 integers representing the number of 100, 50 and 20 dollar bills needed to complete the withdraw (in that order).

Constraints
40 ≤ amount ≤ 10,000

Examples
amount	Return Value
250	[2,1,0]
260	[2,0,3]
370	[3,1,1]

*/ 


//SOLUTION
function withdraw(amount) {
    const num100 = Math.floor(amount / 100);
    const remainingAmountAfter100s = amount - num100 * 100;
    const num50 = Math.floor(remainingAmountAfter100s / 50);
    const num20 = (remainingAmountAfter100s % 50) / 20;
  
    return [num100, num50, num20];
  }
  
  // Example usage:
  console.log(withdraw(250)); // Output: [2, 1, 0]
  console.log(withdraw(260)); // Output: [2, 0, 3]
  console.log(withdraw(370)); // Output: [3, 1, 1]
  
