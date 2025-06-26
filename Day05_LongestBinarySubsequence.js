/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let zeroCount = 0;
    let total = 0;
    let value = 0;
    let power = 1;

    // Step 1: Count all '0's first (safe to include)
    for (let ch of s) {
        if (ch === '0') zeroCount++;
    }

    // Step 2: From right to left, include '1's if they fit
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '1') {
            if (power > k) break;
            value += power;
            if (value > k) break;
            total++;
        }
        power *= 2;
    }

    return zeroCount + total;
};
