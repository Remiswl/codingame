const N = parseInt(readline());
let array = [];
let diffs = [];

for (let i = 0; i < N; i++) {
    const pi = parseInt(readline());
    array.push(pi);
}

array.sort((a, b) => {
    return a - b;
});

for (let i = 0; i < array.length - 1; i++) {
    diff = Math.abs(array[i + 1] - array[i]);

    diffs.push(diff);
}

diffs = diffs.sort((a, b) => {
    return a - b;
});

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(diffs[0]);
