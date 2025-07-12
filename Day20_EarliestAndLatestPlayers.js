var earliestAndLatest = function(n, firstPlayer, secondPlayer) {
    const memo = new Map();

    const dfs = (players, round) => {
        const key = players.join(',') + `|${round}`;
        if (memo.has(key)) return memo.get(key);

        const len = players.length;
        for (let i = 0; i < Math.floor(len / 2); i++) {
            let a = players[i];
            let b = players[len - 1 - i];
            if ((a === firstPlayer && b === secondPlayer) || (a === secondPlayer && b === firstPlayer)) {
                return [round, round];
            }
        }

        let min = Infinity;
        let max = -Infinity;

        const backtrack = (i, newRound) => {
            const len = players.length;
            if (i >= Math.floor(len / 2)) {
                if (len % 2 === 1) newRound.push(players[Math.floor(len / 2)]);
                newRound.sort((a, b) => a - b);
                const [e, l] = dfs(newRound, round + 1);
                min = Math.min(min, e);
                max = Math.max(max, l);
                return;
            }

            const a = players[i];
            const b = players[len - 1 - i];

            if (a === firstPlayer || a === secondPlayer) {
                backtrack(i + 1, [...newRound, a]);
            } else if (b === firstPlayer || b === secondPlayer) {
                backtrack(i + 1, [...newRound, b]);
            } else {
                backtrack(i + 1, [...newRound, a]);
                backtrack(i + 1, [...newRound, b]);
            }
        };

        backtrack(0, []);
        memo.set(key, [min, max]);
        return [min, max];
    };

    const players = Array.from({ length: n }, (_, i) => i + 1);
    return dfs(players, 1);
};
