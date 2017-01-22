/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
    var romanChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
};

function test() {
    console.log(romanToInt('I') == 1);
    console.log(romanToInt('III') == 3);
    console.log(romanToInt('IV') == 4);
    console.log(romanToInt('V') == 5);
    console.log(romanToInt('VI') == 6);
    console.log(romanToInt('VII') == 7);
    console.log(romanToInt('IX') == 9);
    console.log(romanToInt('X') == 10);
    console.log(romanToInt('XII') == 12);
    console.log(romanToInt('XXI') == 21);
    console.log(romanToInt('XLI') == 41);
    console.log(romanToInt('XVIII') == 18);
    console.log(romanToInt('XVIII') == 18);
    console.log(romanToInt('LXXXIII') == 83);
    console.log(romanToInt('CI') == 101);
    console.log(romanToInt('DCCCXLVIII') == 848);
    console.log(romanToInt('MDCCCXLVIII') == 1848);
}

test();