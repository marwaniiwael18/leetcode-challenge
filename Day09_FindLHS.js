/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = new Map();
    let maxLen = 0;

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map.entries()) {
        if (map.has(num + 1)) {
            maxLen = Math.max(maxLen, count + map.get(num + 1));
        }
    }

    return maxLen;
};
