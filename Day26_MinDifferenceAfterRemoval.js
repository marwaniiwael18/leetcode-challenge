class MaxHeap {
    constructor() {
        this.data = [];
    }
    push(val) {
        this.data.push(val);
        this.data.sort((a, b) => b - a); // Max-Heap behavior
    }
    pop() {
        return this.data.shift();
    }
    top() {
        return this.data[0];
    }
    size() {
        return this.data.length;
    }
}

class MinHeap {
    constructor() {
        this.data = [];
    }
    push(val) {
        this.data.push(val);
        this.data.sort((a, b) => a - b); // Min-Heap behavior
    }
    pop() {
        return this.data.shift();
    }
    top() {
        return this.data[0];
    }
    size() {
        return this.data.length;
    }
}

var minimumDifference = function(nums) {
    const n = nums.length / 3;
    const leftSums = Array(3 * n).fill(0);
    const rightSums = Array(3 * n).fill(0);

    const maxHeap = new MaxHeap();
    let leftSum = 0;

    for (let i = 0; i < 2 * n; i++) {
        maxHeap.push(nums[i]);
        leftSum += nums[i];

        if (maxHeap.size() > n) {
            leftSum -= maxHeap.pop();
        }

        if (maxHeap.size() === n) {
            leftSums[i] = leftSum;
        }
    }

    const minHeap = new MinHeap();
    let rightSum = 0;

    for (let i = 3 * n - 1; i >= n; i--) {
        minHeap.push(nums[i]);
        rightSum += nums[i];

        if (minHeap.size() > n) {
            rightSum -= minHeap.pop();
        }

        if (minHeap.size() === n) {
            rightSums[i] = rightSum;
        }
    }

    let result = Infinity;
    for (let i = n - 1; i < 2 * n; i++) {
        result = Math.min(result, leftSums[i] - rightSums[i + 1]);
    }

    return result;
};
