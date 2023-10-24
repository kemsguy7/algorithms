function isPowerTwo(n) {
    if (n < 1) {
        return false;
    }

    while(n > 1) {
        if (n % 2 !==0) {
            return false;
        }
        n  = n/2;

    }
    return true;
}



console.log(isPowerTwo(4));
console.log(isPowerTwo(2));
console.log(isPowerTwo(1));
console.log(isPowerTwo(8));