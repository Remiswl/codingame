const L = parseInt(readline());
const H = parseInt(readline());
const T = readline().toUpperCase();
let indexArray = [];
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';
let k;
let index;

for (let j = 0; j < T.length; j++) {
    for (let i = 0; i < alphabet.length; i++) {
        if (T[j] === alphabet[i]) {
            indexArray.push(i);
        }
    }
}

for (let j = 0; j < indexArray.length; j++) {
    for (let i = 0; i < H; i++) {
        let ROW = readline();

        if (indexArray[j] !== 0) {
            index = indexArray[j] * L;
        } else {
            index = 0;
        }

        k = ROW.substring(index, index + L);
        console.log(k);
    }
}
