/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）
    var romanChars = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var result = '';
    var i = 0;
    while (num > 0) {
        var str = intToRomanLessThanTen(num % 10, romanChars[i], romanChars[i + 1], romanChars[i + 2]);
        result = str + result;
        num = parseInt(num / 10);
        i += 2;
    }
    return result;
};

var intToRomanLessThanTen = function (num, oneChar, fiveChar, tenChar) {
    var result = [];
    if (num > 0 && num < 10) {
        // 0-9
        if (num == 9) {
            result.push(oneChar);
            result.push(tenChar);
        } else {
            if (num >= 5) {
                // 5-9
                result.push(fiveChar);
                num -= 5;
            }
            // 0-4
            if (num == 4) {
                // 4
                result.push(oneChar);
                result.push(fiveChar);
            } else {
                while (num > 0) {
                    result.push(oneChar);
                    num--;
                }
            }
        }
    }
    return result.join('');
};

function test() {
    // console.log(intToRoman(1) == 'I');
    // console.log(intToRoman(3) == 'III');
    // console.log(intToRoman(4) == 'IV');
    // console.log(intToRoman(5) == 'V');
    // console.log(intToRoman(6) == 'VI');
    // console.log(intToRoman(7) == 'VII');
    // console.log(intToRoman(9) == 'IX');
    // console.log(intToRoman(10) == 'X');
    // console.log(intToRoman(12) == 'XII');
    // console.log(intToRoman(21) == 'XXI');
    // console.log(intToRoman(41) == 'XLI');
    // console.log(intToRoman(18) == 'XVIII');
    // console.log(intToRoman(18) == 'XVIII');
    // console.log(intToRoman(83) == 'LXXXIII');
    // console.log(intToRoman(101) == 'CI');
    // console.log(intToRoman(848) == 'DCCCXLVIII');
    console.log(intToRoman(1848) == 'MDCCCXLVIII');
}

test();