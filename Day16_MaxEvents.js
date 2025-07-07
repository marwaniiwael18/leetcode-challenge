/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);
    const minHeap = [];
    let res = 0, day = 0, i = 0;
    const n = events.length;

    while (i < n || minHeap.length > 0) {
        if (minHeap.length === 0) {
            day = events[i][0];
        }

        while (i < n && events[i][0] === day) {
            minHeap.push(events[i][1]);
            i++;
        }

        minHeap.sort((a, b) => a - b); // acts like a min-heap
        minHeap.shift(); // attend the event that ends earliest
        res++;
        day++;

        while (minHeap.length && minHeap[0] < day) {
            minHeap.shift();
        }
    }

    return res;
};
