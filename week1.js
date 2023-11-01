
/*

Task
Your task is to split the chocolate bar of given dimension n x m into small squares.Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
For example, if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must perform two breaks.
If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
Specification
breakChocoloate(n, m)
provide smallest amount of breaks to achieve all unbreakable squares
Parameters
n: Number
m: Number
Return Value
Number - The minimum amount of breaks
Constraints
0 ≤ n ≤ 10
0 ≤ m ≤ 10
Examples
n	m	Return Value
5	5	"24"
7	4	"27"
*/

function chocolate(n, m) {

    if(n <=0 && n <=10 && m <= 0 && m <=10 ) {
        return n *= m -1;
    } else {
        return 0;
    }
}

console.log(chocolate(5, 5));