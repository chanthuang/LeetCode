/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var nums1Index = 0, nums2Index = 0;
    var allNumbers = [];
    while (nums1Index < nums1.length || nums2Index < nums2.length) {
        if (nums1Index < nums1.length && nums2Index < nums2.length) {
            if (nums1[nums1Index] < nums2[nums2Index]) {
                allNumbers.push(nums1[nums1Index]);
                nums1Index++;
            } else {
                allNumbers.push(nums2[nums2Index]);
                nums2Index++;
            }
        } else if (nums1Index < nums1.length) {
            allNumbers.push(nums1[nums1Index]);
            nums1Index++;
        } else {
            allNumbers.push(nums2[nums2Index]);
            nums2Index++;
        }
    }
    if (allNumbers.length % 2 == 0) {
        var middleLeftIndex = Math.floor(allNumbers.length / 2) - 1;
        return (allNumbers[middleLeftIndex] + allNumbers[middleLeftIndex + 1]) / 2;
    } else {
        return allNumbers[Math.floor(allNumbers.length / 2)];
    }
};

function test() {
    var nums1 = [1, 5];
    var nums2 = [2, 4];
    console.log(findMedianSortedArrays(nums1, nums2));
}

test();