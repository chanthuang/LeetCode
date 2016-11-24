/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var i;
    for (i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (i = 0; i < nums.length; i++) {
        var targetElement = target - nums[i];
        if (map[targetElement] !== undefined && map[targetElement] != i) {
            return [i, map[targetElement]];
        }
    }
};