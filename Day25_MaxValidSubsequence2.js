var maximumLength = function(nums, k) {
    const n = nums.length;
    let maxLen = 1;

    // Map of maps: dp[i][mod] = length of subsequence ending at i with given mod
    let dp = new Map();

    for (let i = 0; i < n; i++) {
        const current = nums[i];

        // Start new subsequence
        if (!dp.has(i)) dp.set(i, new Map());

        for (let j = 0; j < i; j++) {
            const prev = nums[j];
            const mod = (prev + current) % k;

            // Get length of the best sequence ending at j with this mod
            const prevMap = dp.get(j) || new Map();
            const prevLen = (prevMap.get(mod) || 1);

            // Update current dp map
            dp.get(i).set(mod, Math.max(dp.get(i).get(mod) || 1, prevLen + 1));
            maxLen = Math.max(maxLen, dp.get(i).get(mod));
        }
    }

    return maxLen;
};
