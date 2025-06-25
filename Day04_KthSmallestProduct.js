/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var kthSmallestProduct = function(nums1, nums2, k) {
    let left = -1e10, right = 1e10;

    const countLessEqual = (val) => {
        let count = 0;
        for (let a of nums1) {
            if (a > 0) {
                let l = 0, r = nums2.length - 1;
                while (l <= r) {
                    let m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= val) l = m + 1;
                    else r = m - 1;
                }
                count += l;
            } else if (a < 0) {
                let l = 0, r = nums2.length - 1;
                while (l <= r) {
                    let m = Math.floor((l + r) / 2);
                    if (a * nums2[m] <= val) r = m - 1;
                    else l = m + 1;
                }
                count += nums2.length - l;
            } else {
                if (val >= 0) count += nums2.length;
            }
        }
        return count;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countLessEqual(mid) < k) left = mid + 1;
        else right = mid;
    }

    return left;
};
