const LON = parseFloat(readline().replace(',', '.'));
const LAT = parseFloat(readline().replace(',', '.'));
const N = parseInt(readline());

let distToUser;
let shortestDist;
let closestDef;

function calcDistance(longA, latA, longB, latB) {
    let x = (longB - longA) * Math.cos((latA + latB) / 2);
    let y = latB - latA;
    return Math.sqrt(x * x + y * y) * 6371;
}

for (let i = 0; i < N; i++) {
    const DEFIB = readline().split(';');

    distToUser = calcDistance(LON, LAT, parseFloat(DEFIB[4].replace(',', '.')), parseFloat(DEFIB[5].replace(',', '.'))).toFixed(3);

    if (shortestDist == undefined) {
        shortestDist = distToUser;
    }

    if (distToUser < shortestDist) {
        distToUser = shortestDist;
        closestDef = DEFIB[1];
    }
}

console.log(closestDef);
