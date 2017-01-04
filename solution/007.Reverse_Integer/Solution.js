/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
    while (x != 0) {
        result = result * 10 + x % 10;
        x = parseInt(x / 10);
    }
    // x 超出 Math.pow(2, 31) 时当做溢出处理
    if (result >= 2147483648 || result <= -2147483648) {
        return 0;
    }
    return result;
};

function test() {
    console.log(reverse(-123) == -321);
    console.log(reverse(10) == 1);
    console.log(reverse(1534236469) == 0)
}

test();