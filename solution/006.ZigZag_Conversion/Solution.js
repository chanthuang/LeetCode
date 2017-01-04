/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 0) {
        return '';
    } else if (numRows == 1) {
        return s;
    }
    var string = '';
    for (var i = 0; i < numRows; i++) {
        string += stringOfRow(s, numRows, i);
    }
    return string;
};

var stringOfRow = function(s, numRows, row) {
    var index = 0;
    var string = '';
    var loopLength = 2 * numRows - 2;
    while (index < s.length) {
        var leftIndexInLoop = row;
        if (index + leftIndexInLoop < s.length) {
            string += s[index + leftIndexInLoop];
        }

        var rightIndexInLoop = loopLength - leftIndexInLoop;
        if (leftIndexInLoop != rightIndexInLoop &&
            rightIndexInLoop < loopLength
            && index + rightIndexInLoop < s.length) {
            string += s[index + rightIndexInLoop];
        }
        index += 2 * numRows - 2;
    }
    return string;
};

/**
 * 1:
 * 0 1 2 3
 *
 * 2:
 * 0 2 4
 * 1 3 5
 *
 * 3:
 * 0   4   8
 * 1 3 5 7
 * 2   6
 *
 * 4:
 * 0     6      12
 * 1   5 7   11 13
 * 2 4   8 10   14
 * 3     9      15
 *
 * 0                        2numRows-2
 * 1                      ...
 * 2                numRows+1
 * ...       numRows+0
 * numRows-1
 *
 */

function test() {
    console.log(convert("PAYPALISHIRING", 3) == "PAHNAPLSIIGYIR");
    console.log(convert("ABCD1234e", 2) == "AC13eBD24");
    console.log(convert("A", 1) == "A");
}

test();