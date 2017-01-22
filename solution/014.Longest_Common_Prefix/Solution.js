/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length == 0) { return ""; }
    for (var index = 0, pass = true; pass; index++) {
        var c = undefined;
        for (var i in strs) {
            var str = strs[i];
            if (index >= str.length) {
                pass = false;
                break;
            }
            if (c !== undefined && c != str.charAt(index)) {
                pass = false;
                break;
            } else {
                c = str.charAt(index);
            }
        }
    }
    return strs[0].substr(0, index - 1);
};

(function test() {
    console.log(longestCommonPrefix([]) == '');
    console.log(longestCommonPrefix(['1121', '112']) == '112');
})();