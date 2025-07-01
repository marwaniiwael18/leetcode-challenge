/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let groups = [];
    let i = 0;

    while (i < word.length) {
        let j = i;
        while (j < word.length && word[j] === word[i]) j++;
        groups.push(j - i);
        i = j;
    }

   
    let result = 1;
    for (let len of groups) {
        if (len > 1) {
            result += (len - 1);
        }
    }

    return result;
};
