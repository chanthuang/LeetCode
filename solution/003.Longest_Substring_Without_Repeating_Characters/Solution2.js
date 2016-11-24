/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var length = s.length;
	var left = 0;
	var right = 0;
    var maxLength = 0;
	var map = {};
    while (left < length && right < length) {
    	if (map[s.charAt(right)] === undefined) {
    		map[s.charAt(right)] = true;
    		maxLength = Math.max(maxLength, right - left + 1);
    		right++;
		} else {
    	    delete map[s.charAt(left)];
    	    left++;
		}
	}
	return maxLength;
};

// test
function test() {
	var testString = "abcabcbb";
	console.log('string = ' + testString);
	console.log('index  = ' + (function(testString){
		var s = "";
		for (var i = 0; i < testString.length; i++) {
			s += i;
		}
		return s;
	})(testString));
	console.log("length = " + lengthOfLongestSubstring(testString));
}

test();