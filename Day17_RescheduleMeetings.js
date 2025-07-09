/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime2 = function(eventTime, k, startTime, endTime) {
    const n = startTime.length;

    // Compute meeting durations
    const durations = Array(n).fill(0).map((_, i) => endTime[i] - startTime[i]);

    // Gaps between meetings
    const gaps = [];
    gaps.push(startTime[0]); // Before the first meeting
    for (let i = 0; i < n - 1; i++) {
        gaps.push(startTime[i + 1] - endTime[i]);
    }
    gaps.push(eventTime - endTime[n - 1]); // After the last meeting

    let maxFree = Math.max(...gaps);

    // Try rescheduling up to k consecutive meetings
    for (let i = 0; i < n; i++) {
        let totalDuration = 0;
        for (let j = i; j < Math.min(n, i + k); j++) {
            totalDuration += durations[j];
            const left = i === 0 ? 0 : endTime[i - 1];
            const right = j === n - 1 ? eventTime : startTime[j + 1];
            const available = right - left;
            const newGap = available - totalDuration;
            maxFree = Math.max(maxFree, newGap);
        }
    }

    return Math.max(0, maxFree);
};

// Examples
console.log("Example 1:", maxFreeTime2(5, 1, [1, 3], [2, 5])); // 2
console.log("Example 2:", maxFreeTime2(10, 1, [0, 2, 9], [1, 4, 10])); // 6
console.log("Example 3:", maxFreeTime2(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // 0
