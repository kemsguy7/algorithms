

/*

Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. 
Note that each word in the array counts as a 90° rotation in that direction. 

 
Worked Example 

["right", "right", "right", "right", "left", "right"] ➞ 1 

 You spun right 4 times (90 * 4 = 360) 

 You spun left once (360 - 90 = 270) 

 But you spun right once more to make a full rotation (270 + 90 = 360) 

Examples 

["left", "right", "left", "right"] ➞ 0 

 

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2  

["left", "left", "left", "left"] ➞ 1 

Notes 

Return a positive number. 

All tests will only include the words "right" and "left". 

 
spinAround(['left', 'right', 'left', 'right']) => 0 

spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']) => 2 

spinAround(['left', 'left', 'left', 'left']) =>  1 

spinAround([]), 0; 
spinAround(['left']), 0; 

spinAround(['right']), 0; 
*/


let countLeft = 0;
let countRight = 0;
 
function spinAround(array) {    
    array.forEach( function (elem, index) {
        if (array.includes('left')) {
            countLeft += 90;
        } else if(array.includes('right')) {
            countRight += 90;
        }
    });
} 

//KEHINDE'S SOLUTION
let arr = ["right", "left", "right", "left", "right", "left", "right", "right" ]

function spinAround (array) {
    let rightCounter = array.reduce(accumulator, current) => {
        if(current == "right") {
            accumulator += 0.25
        }
        return accumulator
    },0)

}