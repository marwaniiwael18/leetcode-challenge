/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort(); // Sort folders lexicographically
    const res = [folder[0]];

    for (let i = 1; i < folder.length; i++) {
        if (!folder[i].startsWith(res[res.length - 1] + "/")) {
            res.push(folder[i]);
        }
    }

    return res;
};
