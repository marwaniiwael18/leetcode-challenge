/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    const freq = new Array(26).fill(0);
    for (const c of s) {
        freq[c.charCodeAt() - 97]++;
    }

    const candidates = [];
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(97 + i);
        const count = Math.floor(freq[i] / k);
        for (let j = 0; j < count; j++) {
            candidates.push(char);
        }
    }

    let best = "";

    const isValid = (t) => {
        let i = 0, j = 0;
        const repeated = t.repeat(k);
        for (const c of s) {
            if (c === repeated[j]) j++;
            if (j === repeated.length) return true;
        }
        return false;
    };

    const dfs = (cur) => {
        if (cur.length > best.length || (cur.length === best.length && cur > best)) {
            if (isValid(cur)) best = cur;
        }
        if (cur.length === 7) return;
        for (let i = 25; i >= 0; i--) {
            const char = String.fromCharCode(97 + i);
            const count = cur.split(char).length - 1;
            if ((cur + char).split(char).length - 1 <= freq[i] / k) {
                dfs(cur + char);
            }
        }
    };

    dfs("");

    return best;
};
