/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    const n = startTime.length;
    const duration = startTime.map((s, i) => endTime[i] - s);
    let maxGap = 0;

    for (let i = 0; i < n; i++) {
        // Try moving meeting i to every possible valid spot
        let newStart = [];
        for (let t = 0; t <= eventTime - duration[i]; t++) {
            let newEnd = t + duration[i];
            let conflict = false;

            for (let j = 0; j < n; j++) {
                if (j === i) continue;
                if (!(newEnd <= startTime[j] || t >= endTime[j])) {
                    conflict = true;
                    break;
                }
            }

            if (!conflict) {
                // Build new schedule
                let schedule = [];
                for (let j = 0; j < n; j++) {
                    if (j === i) {
                        schedule.push([t, newEnd]);
                    } else {
                        schedule.push([startTime[j], endTime[j]]);
                    }
                }
                schedule.sort((a, b) => a[0] - b[0]);

                // Compute max free time
                let prev = 0;
                let localMax = 0;
                for (let [s, e] of schedule) {
                    localMax = Math.max(localMax, s - prev);
                    prev = e;
                }
                localMax = Math.max(localMax, eventTime - prev);
                maxGap = Math.max(maxGap, localMax);
            }
        }
    }

    return maxGap;
};

// Examples:
console.log("Example 1:", maxFreeTime(5, [1, 3], [2, 5])); // Expected: 2
console.log("Example 2:", maxFreeTime(10, [0, 7, 9], [1, 8, 10])); // Expected: 7
console.log("Example 3:", maxFreeTime(10, [0, 3, 7, 9], [1, 4, 8, 10])); // Expected: 6
console.log("Example 4:", maxFreeTime(5, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // Expected: 0
