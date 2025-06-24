/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    const indices = [];
    const result = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) {
            indices.push(i);
        }
    }

    for (const idx of indices) {
        for (let i = idx - k; i <= idx + k; i++) {
            if (i >= 0 && i < nums.length) {
                result.add(i);
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
};
