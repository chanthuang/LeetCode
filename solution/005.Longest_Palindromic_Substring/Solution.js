/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    log('');
    log('# s=' + s);
    var sourceLength = s.length;
    var length = 0;
    var result = {l: 0, r: 0};
    for (var mid = 0; mid < sourceLength; mid++) {
        log('## mid=' + mid);
        var left = mid;
        var right = mid;
        while (left >= 1 && right <= sourceLength - 2) {
            var equal = s.charAt(left - 1) == s.charAt(right + 1);
            if (equal) {
                left--;
                right++;
            } else {
                break;
            }
            left--;
            right++;
            var isEqual = s.charAt(left) == s.charAt(right);
            log('left=' + left + ', right=' + right + ', isEqual=' + isEqual);
            if (!isEqual) {
                left++;
                right--;
                break;
            }
        }
        var len = right - left + 1;
        if (len >= length) {
            log('update length=' + len + ', l=' + left + ', r=' + right);
            length = len;
            result.l = left;
            result.r = right;
        }
        length = Math.max(right - left + 1, length);
        left = mid;
        right = Math.min(mid + 1, sourceLength - 1);

        if (s.charAt(left) == s.charAt(right)) {
            while (left >= 1 && right <= sourceLength - 2) {
                left--;
                right++;
                if (s.charAt(left) != s.charAt(right)) {
                    left++;
                    right--;
                    break;
                }
            }
            len = right - left + 1;
            if (len >= length) {
                // update result
                length = len;
                result.l = left;
                result.r = right;
            }
        }
    }

    return s.substr(result.l, result.r - result.l + 1);
};

var debug = false
var log = function(str) {
    if (debug) { console.log(str); }
};

function test() {
    var strs = [
        ["babad", "bab"],
        ["cbbd", "bb"],
        ["abcba", "abcba"],
        ["aaaa", "aaaa"]
    ];
    for (var i = 0; i < strs.length; i++) {
        var source = strs[i][0];
        var result = longestPalindrome(source);
        var expect = strs[i][1];
        console.log('input=' + source + ', result=' + result
            + ', ' + (result == expect));
    }
}

test();