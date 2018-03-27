#!/usr/bin/env python
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(0, len(nums)):
            expect_j_value = target - nums[i]
            try:
                j = nums.index(expect_j_value)
                if j == i:
                    j = nums.index(expect_j_value, j + 1)
                return [i, j]
            except ValueError:
                pass

def checkResult(condition, result):
    print(condition, 'should be', result)

if __name__ == '__main__':
    checkResult(Solution().twoSum([2, 7, 11, 15], 9), [0, 1])
    checkResult(Solution().twoSum([3, 2, 4], 6), [1, 2])

