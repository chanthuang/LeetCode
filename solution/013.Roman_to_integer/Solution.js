/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var map = {
        'I': 1, 'V': 5,
        'X': 10, 'L': 50,
        'C': 100, 'D': 500,
        'M': 1000
    };
    var result = 0;
    var i = 0;
    var lastChar = '';
    while (i < s.length) {
        var char = s.charAt(i);
        if (lastChar == 'I' && char == 'V') {
            result += 3;
        } else if (lastChar == 'I' && char == 'X') {
            result += 8;
        } else if (lastChar == 'X' && char == 'L') {
            result += 30;
        } else if (lastChar == 'X' && char == 'C') {
            result += 80;
        } else if (lastChar == 'C' && char == 'D') {
            result += 300;
        } else if (lastChar == 'C' && char == 'M') {
            result += 800;
        } else {
            result += map[char];
        }
        lastChar = char;
        i++;
    }
    return result;
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