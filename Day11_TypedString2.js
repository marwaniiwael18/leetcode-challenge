/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var possibleStringCount = function(word, k) {
    const MOD = 1e9 + 7;
    let n = word.length;

    // Step 1: group consecutive characters
    let groups = [];
    let i = 0;
    while (i < n) {
        let j = i;
        while (j < n && word[j] === word[i]) j++;
        groups.push(j - i);
        i = j;
    }

    // Step 2: DP[i][len] = number of ways to build a prefix of length `len` using first `i` groups
    let maxLen = word.length;
    let dp = new Array(groups.length + 1).fill(0).map(() => new Array(maxLen + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 0; i < groups.length; i++) {
        for (let len = 0; len <= maxLen; len++) {
            if (dp[i][len] === 0) continue;
            for (let take = 1; take <= groups[i]; take++) {
                dp[i + 1][len + take] = (dp[i + 1][len + take] + dp[i][len]) % MOD;
            }
        }
    }

    let result = 0;
    for (let len = k; len <= maxLen; len++) {
        result = (result + dp[groups.length][len]) % MOD;
    }

    return result;
};
