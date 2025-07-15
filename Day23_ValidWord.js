/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;

    const vowels = new Set('aeiouAEIOU');
    let hasVowel = false;
    let hasConsonant = false;

    for (let ch of word) {
        if (!/[a-zA-Z0-9]/.test(ch)) return false;

        if (/[a-zA-Z]/.test(ch)) {
            if (vowels.has(ch)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};
