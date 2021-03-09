let L = parseInt(readline());
let H = parseInt(readline());
let T = readline().toUpperCase();
let indexArray = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';

for (let j = 0; j < T.length; j++) {
    if (alphabet.includes(T[j]) === false) {
        T = T.replace(T[j], '?');
    }

    for (let i = 0; i < alphabet.length; i++) {
        if (T[j] === alphabet[i]) {
            indexArray.push(i);
        }
    }
}

for (let i = 0; i < H; i++) {
    let ROW = readline();
    let answer = '';

    for (let j = 0; j < indexArray.length; j++) {
        answer = answer + ROW.substring(indexArray[j] * L, indexArray[j] * L + L);
    }

    console.log(answer);
}
