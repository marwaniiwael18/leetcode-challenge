function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

function toBaseK(num, k) {
  return num.toString(k);
}

var kMirror = function(k, n) {
  let sum = 0;
  let len = 1;

  while (n > 0) {
    const start = 10 ** Math.floor((len - 1) / 2);
    const end = 10 ** Math.ceil(len / 2);

    for (let half = start; half < end && n > 0; half++) {
      const h = String(half);
      const r = h.split("").reverse().join("");
      const full = h + (len % 2 ? r.slice(1) : r);
      const num = parseInt(full, 10);

      if (isPalindrome(toBaseK(num, k))) {
        sum += num;
        n--;
      }
    }

    len++;
  }

  return sum;
};
