var kthCharacter = function(k) {
    let length = 1;
    while (length < k) length <<= 1;

    let shift = 0;

    while (length > 1) {
        let half = length >> 1;
        if (k > half) {
            k -= half;
            // Décalage vers l'avant d'une lettre (a -> b)
            shift = (shift + 1) % 26;
        }
        length = half;
    }

    let baseCharCode = 'a'.charCodeAt(0);
    let finalCharCode = ((baseCharCode - 97 + shift) % 26) + 97;
    return String.fromCharCode(finalCharCode);
};
