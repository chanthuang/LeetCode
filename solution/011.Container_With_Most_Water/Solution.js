/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var maxArea = 0;
    for (var left = 0, right = height.length; left < right; ) {
        var area = (right - left) * Math.min(height[left], height[right]);
        if (area > maxArea) {
            maxArea = area;
        }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};

/**
 * 用简单的方法计算，为了得到正确的结果
 * @param {number[]} height
 * @return {number}
 */
var stupidMaxArea = function (height) {
    var maxArea = 0;
    for (var i = 0; i < height.length; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var area = (j - i) * Math.min(height[i], height[j]);
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
};

function test() {
    var height = [4, 6, 3, 8, 3, 5, 1, 4];
    console.log(maxArea(height) == stupidMaxArea(height));
}

test();