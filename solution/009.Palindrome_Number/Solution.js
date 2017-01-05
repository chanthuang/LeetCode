/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || x > Math.pow(2, 32) - 1) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    var a = x;
    var reverseResult = 0;
    while (a != 0) {
        reverseResult = reverseResult * 10 + a % 10;
        a = parseInt(a / 10);
    }
    return reverseResult == x;
};

function test() {
    console.log(isPalindrome(123) == false);
    console.log(isPalindrome(12321) == true);
    console.log(isPalindrome(123321) == true);
}

test();