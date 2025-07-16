// Day24_MaxValidSubsequence.js
// LeetCode 3201. Find the Maximum Length of Valid Subsequence I
// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const countMaxSubsequence = (targetMod) => {
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            let len = 1;
            let prev = nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                if ((prev + nums[j]) % 2 === targetMod) {
                    len++;
                    prev = nums[j];
                }
            }
            max = Math.max(max, len);
        }
        return max;
    };

    return Math.max(countMaxSubsequence(0), countMaxSubsequence(1));
};

// Example usage:
// console.log(maximumLength([1,2,1,2,1,2])); // Output: 6
