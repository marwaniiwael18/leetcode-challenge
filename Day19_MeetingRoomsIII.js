
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    const roomUsage = Array(n).fill(0);
    const available = Array.from({ length: n }, (_, i) => i).sort((a, b) => a - b);

    const busyRooms = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

    for (let [start, end] of meetings) {
        while (!busyRooms.isEmpty() && busyRooms.front()[0] <= start) {
            available.push(busyRooms.dequeue()[1]);
        }

        if (available.length > 0) {
            available.sort((a, b) => a - b);
            const room = available.shift();
            busyRooms.enqueue([end, room]);
            roomUsage[room]++;
        } else {
            const [nextFreeTime, room] = busyRooms.dequeue();
            const duration = end - start;
            busyRooms.enqueue([nextFreeTime + duration, room]);
            roomUsage[room]++;
        }
    }

    let max = -1;
    let index = 0;
    for (let i = 0; i < n; i++) {
        if (roomUsage[i] > max) {
            max = roomUsage[i];
            index = i;
        }
    }

    return index;
};
