/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  // pair each value with its index
  const pairs = nums.map((v, i) => [v, i]);

  // pick the k largest by value (stable on index so earlier stays earlier)
  pairs.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  const topK = pairs.slice(0, k).map(p => p[1]);   // keep their indices

  // restore original order
  topK.sort((a, b) => a - b);

  return topK.map(i => nums[i]);
};
