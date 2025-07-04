/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 */
var kthCharacter = function(k, operations) {
    k = BigInt(k);
    let n = operations.length;
    const lens = [1n];  // initial length is 1 (for word = "a")

    // Step 1: Calculate the length of word after each operation
    for (let i = 0; i < n; i++) {
        if (operations[i] === 0) {
            lens.push(lens[lens.length - 1] * 2n);
        } else {
            lens.push(lens[lens.length - 1] * 2n);
        }
    }

    // Step 2: Go backward and simulate where k came from
    let shifts = 0;
    for (let i = n - 1; i >= 0; i--) {
        let half = lens[i];
        if (k > half) {
            k -= half;
            if (operations[i] === 1) {
                shifts++;
            }
        }
    }

    // Step 3: Apply character shift from 'a'
    let code = 'a'.charCodeAt(0);
    code = ((code - 97 + shifts) % 26) + 97;
    return String.fromCharCode(code);
};
