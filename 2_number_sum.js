
//soln1

function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const tempSum = targetSum - num;
        if (tempSum in nums ) {
            return [tempSum, num];
        } else nums[num] = true;
    }
    return [];
}


//this solution is not efficient 
function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length - 1; i++) {
        const num1 = array[i];
        for (let j = 0; j < array.length - 1; j++) {
            const num2 = array[j];
            if(num1 + num2 === targetSum) {
                return [num1, num2];
            }
        }
    }
    return [];
}

//solution 3 
/*
write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. if 
if any 2 numbers in the input array sum up the target sum, the function should return them in an array, in any order.
if no two numbers sum up to the target sum, the function should return an empty array.

- Target sum has to be obtained by summing 2 diffent integeters in the arrayy; 
you cant add a single integer to itself in order to obtain the target sum


you can assume that there will be at most one pair of numbers summing up to the target sum
*/

/*
function twoNumberSum(array, targetSum) {
    let left = 0; 
    let right = array.length - 1;
    while(left < right) {
        currentNum = array[left] + array[right];
        if(currentNum === targetSum) {
            return [array[left, array[right]]];
        } else if(currentNum < targetSum) {
            left++;
        } else if (currentNum > targetSum) {
            right--;
        }
    }
    return[]
}

*/
