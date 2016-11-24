/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var maxLength = 0;
	for (var i = 0; i < s.length; i++) {
		if (s.length - i <= maxLength) break;
		var map = {};
		var length = 0;
		for (var j = i; j < s.length; j++) {
			var charCode = s.charCodeAt(j);
			if (map[charCode] !== null && map[charCode] !== undefined) {
				break;
			}
			map[charCode] = j;
			length++;
		}
		if (length > maxLength) maxLength = length;
		// console.log('from index(' + i + ') maxLength = ' + length + ', substr = ' + s.substr(i, length));
	}
	return maxLength;
};

// test
function test() {
	var testString = "abcabcbb";
	console.log('string = ' + testString);
	console.log('index  = ' + (function(s){
		var s = "";
		for (var i = 0; i < s.length; i++) {
			s += i;
		};
		return s;
	})(testString));
	console.log("length = " + lengthOfLongestSubstring(testString));
}

test();