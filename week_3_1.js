

/*

        QUESTION

        Task
        Write a function that returns the middle of a string. If the word's length is odd, return the middle character. 
        If the word's length is even, return the middle 2 characters.

        getMiddle(s)
        Find the middle character(s) of a word.

        Parameters
        s: String - word to pull middle characters from

        Return Value
        String - letter(s) in the middle of the word

        Constraints
        0 < str < 1000

        Examples
        s	Return Value
        "test"	"es"
        "testing"	"t"
        "middle"	"dd"

*/


//MR BOND'S SOLUTIONS


function getMiddle(word:string): string {
    const maxIndex = word.length - 1;

    if(maxIndex % 2 === 0) {
        return word[maxIndex / 2 ];
    }

    const firstHalf = Math.trunc(mathIndex / 2);
    const secondHalf = firstHalf + 1;

    return word(firstHalf)
}

