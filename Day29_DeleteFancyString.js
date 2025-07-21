// Day29_DeleteFancyString.js
// LeetCode 1957. Delete Characters to Make Fancy String
// Difficulty: Easy

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count < 3) {
            result += s[i];
        }
    }

    return result;
};

// Example test
console.log(makeFancyString("leeetcode")); // "leetcode"
console.log(makeFancyString("aaabaaaa"));  // "aabaa"
console.log(makeFancyString("aab"));       // "aab"
