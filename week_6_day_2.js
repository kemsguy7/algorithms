
/*

Task
In this challenge, your task is to write a function to identify heterograms with k-tolernance. The signature is isogramWithTolerance(s: string, k: int) -> bool.

A heterogram is a string that contains no duplicate alphabetical characters (regardless of case). "Subdermatoglyphic" is a 17-letter heterogram, "dog" is a 3-letter heterogram, but "floss" isn't a heterogram because of the repeated "s".

A k-tolerant heterogram is a heterogram that allows k letters (in any case) to be duplicated. So "abc" is a heterogram in the traditional sense (i.e. k=0), and "abcc" isn't. However, if we allow k=1 tolerance, then "abcc" is a 1-tolerant heterogram because the extra "c" can be ignored. However, "abccdd" isn't 1-tolerant (it's 2-tolerant, though).

Note that tolerance applies to letters, not characters. Under this definition, "abcccc" is still 1-tolerant; even though there are more than 2 repetitions of "c". Similarly, "aaaabbbbcde" is 2-tolerant but not 3-tolerant.

See the test suite for a comprehensive set of examples.

Rubric
The primary goal is to pass all test cases. Among passing solutions, your code will be further evaluated for cleanliness, simplicity and code quality.

Resources
You are permitted to search documentation for syntax and library function descriptions but are not allowed to look up a solution directly.

*/