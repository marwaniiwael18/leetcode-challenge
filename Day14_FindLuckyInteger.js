// Day14_FindLuckyInteger.js

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = new Map();

    // Count frequencies
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let result = -1;

    // Find the max lucky number
    for (const [num, count] of freq.entries()) {
        if (num === count) {
            result = Math.max(result, num);
        }
    }

    return result;
};
