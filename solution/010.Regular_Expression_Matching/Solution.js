/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    return isMatchFromIndex(s, 0, p, 0);
};

var isMatchFromIndex = function (s, i, p, j) {
    if (j == p.length) {
        return i == s.length;
    }

    var curP = p.charAt(j);
    if (j + 1 < p.length && p.charAt(j + 1) == '*') {
        while (i < s.length && (curP == '.' || s.charAt(i) == curP)) {
            if (isMatchFromIndex(s, i, p, j + 2)) {
                return true;
            }
            i++;
        }
        return isMatchFromIndex(s, i, p, j + 2);
    } else {
        if (curP == '.' || s.charAt(i) == curP) {
            return isMatchFromIndex(s, i + 1, p, j + 1);
        } else {
            return false;
        }
    }
};

function test() {
    console.log(isMatch("aa", "a") == false);
    console.log(isMatch("aa", "aa") == true);
    console.log(isMatch("aaa", "aa") == false);
    console.log(isMatch("aa", "a*") == true);
    console.log(isMatch("aa", ".*") == true);
    console.log(isMatch("ab", ".*") == true);
    console.log(isMatch("aab", "c*a*b") == true);
    console.log(isMatch("bbbba", ".*a*a") == true);
}

test();