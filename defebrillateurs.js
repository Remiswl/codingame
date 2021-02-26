const LON = readline();
const LAT = readline();
const N = parseInt(readline());

let x = (longB - longA) * cos((latA + latB) / 2);
let y = latB - latA;
let d = Math.sqrt(x * x + y * y) * 6371;

for (let i = 0; i < N; i++) {
    const DEFIB = readline();
}

console.log('answer');
