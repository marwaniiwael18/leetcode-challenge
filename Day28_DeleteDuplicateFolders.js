var deleteDuplicateFolder = function(paths) {
    class TrieNode {
        constructor() {
            this.children = new Map();
            this.isDeleted = false;
        }
    }

    const root = new TrieNode();

    // Step 1: Build Trie
    for (const path of paths) {
        let node = root;
        for (const folder of path) {
            if (!node.children.has(folder)) {
                node.children.set(folder, new TrieNode());
            }
            node = node.children.get(folder);
        }
    }

    const seen = new Map();

    // Step 2: Serialize subtrees and find duplicates
    const serialize = (node) => {
        if (node.children.size === 0) return "";

        const parts = [];
        const sortedKeys = [...node.children.keys()].sort();

        for (const key of sortedKeys) {
            const child = node.children.get(key);
            const serializedChild = serialize(child);
            parts.push(key + "(" + serializedChild + ")");
        }

        const serial = parts.join("");

        if (seen.has(serial)) {
            node.isDeleted = true;
            seen.get(serial).isDeleted = true;
        } else {
            seen.set(serial, node);
        }

        return serial;
    };

    serialize(root);

    // Step 3: Reconstruct valid paths
    const result = [];

    const collectPaths = (node, path) => {
        for (const [key, child] of node.children) {
            if (!child.isDeleted) {
                const nextPath = [...path, key];
                result.push(nextPath);
                collectPaths(child, nextPath);
            }
        }
    };

    collectPaths(root, []);

    return result;
};
