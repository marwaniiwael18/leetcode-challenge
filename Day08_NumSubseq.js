/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    const MOD = 1e9 + 7;
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const powers = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        powers[i] = (powers[i - 1] * 2) % MOD;
    }

    let left = 0, right = n - 1, res = 0;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            res = (res + powers[right - left]) % MOD;
            left++;
        } else {
            right--;
        }
    }

    return res;
};
