/**
 * 递归方法寻找第k小的数
 */
function findKthWithRecursion(nums1, nums2, k) {
    if (nums1.length == 0) return nums2[k - 1];
    if (nums2.length == 0) return nums1[k - 1];
    if (k == 1) return Math.min(nums1[0], nums2[0]);
    var mid1, mid2;
    var middle = Math.floor(k / 2);
    if (nums1.length < nums2.length) {
        middle = Math.min(middle, nums1.length);
        mid1 = middle - 1;
        mid2 = k - middle - 1;
    } else {
        middle = Math.min(middle, nums2.length);
        mid2 = middle - 1;
        mid1 = k - middle - 1;
    }
    if (nums1[mid1] < nums2[mid2]) {
        return findKthWithRecursion(nums1.slice(mid1 + 1), nums2, k - mid1 - 1);
    } else {
        return findKthWithRecursion(nums1, nums2.slice(mid2 + 1), k - mid2 - 1);
    }
}

/**
 * 非递归方法寻找第k小的数
 */
function findKthWithoutRecursion(nums1, nums2, k) {
    var left1 = 0, left2 = 0;
    var mid1, mid2;
    while (true) {
        if (nums1.length - left1 == 0) return nums2[k - 1];
        if (nums2.length - left2 == 0) return nums1[k - 1];
        if (k == 1) return Math.min(nums1[left1], nums2[left2]);
        var middle = Math.floor(k / 2);
        if (nums1.length - left1 < nums2.length - left2) {
            middle = Math.min(middle, nums1.length - left1);
            mid1 = left1 + middle - 1;
            mid2 = left2 + k - middle - 1;
        } else {
            middle = Math.min(middle, nums2.length - left2);
            mid2 = left2 + middle - 1;
            mid1 = left1 + k - middle - 1;
        }
        if (nums1[mid1] < nums2[mid2]) {
            k -= mid1 - left1 + 1;
            left1 = mid1 + 1;
        } else {
            k -= mid2 - left2 + 1;
            left2 = mid2 + 1;
        }
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var totNumber = nums1.length + nums2.length;
    var k = Math.floor(totNumber / 2);
    if (totNumber % 2 == 1) {
        return findKthWithoutRecursion(nums1, nums2, k + 1);
    } else {
        return (findKthWithoutRecursion(nums1, nums2, k) + findKthWithoutRecursion(nums1, nums2, k + 1)) / 2;
    }
};

function test() {
    var nums1 = [1, 2, 4, 5];
    var nums2 = [3, 8];
    console.log(findMedianSortedArrays(nums1, nums2));
}

test();
