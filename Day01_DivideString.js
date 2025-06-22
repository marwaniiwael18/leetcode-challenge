var divideString = function(s, k, fill) {
    const result = [];
    for (let i = 0; i < s.length; i += k) {
        let group = s.slice(i, i + k);
        if (group.length < k) {
            group = group.padEnd(k, fill);
        }
        result.push(group);
    }
    return result;
};
