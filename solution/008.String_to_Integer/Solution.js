/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    var result = 0;
    var sign = 1;
    var hasSign = false;
    var i = 0;
    while (i < str.length && str[i] == ' ') {
        i++;
    }
    while (i < str.length) {
        var cur = str[i];
        if (cur == '+' || cur == '-') {
            if (hasSign) {
                return 0;
            }
            sign = cur == '+' ? 1 : -1;
            hasSign = true;
        } else if (cur >= '0' && cur <= '9') {
            var curInteger = cur - '0';
            result = result * 10 + curInteger;
            if (result * sign > INT_MAX) { return INT_MAX; }
            if (result * sign < INT_MIN) { return INT_MIN; }
        } else {
            break;
        }
        i++;
    }
    return result * sign;
};

function test() {
    console.log(myAtoi(" -123 ") == -123);
    console.log(myAtoi("+1 23") == 1);
    console.log(myAtoi("+147") == 147);
}

test();