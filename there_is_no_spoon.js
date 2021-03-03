const width = parseInt(readline());
const height = parseInt(readline());
let x1, y1, x2, y2, x3, y3;

let array = [];

for (let i = 0; i < height; i++) {
    const line = readline();
    let coord = [];

    for (let j = 0; j < line.length; j++) {
        coord.push(line[j]);
    }

    array.push(coord);
}

function showCoords(i, j) {
    x1 = j;
    y1 = i;
}

function coordsRight(i, j) {
    if (array[i] !== undefined && array[i][j + 1] !== undefined) {
        if (array[i][j + 1] === '0') {
            x2 = j + 1;
            y2 = i;
        } else if (array[i][j + 1] !== '0') {
            do {
                j = j + 1;
            } while (array[i] !== undefined && array[i][j + 1] !== '0');

            if (array[i] === undefined) {
                x2 = -1;
                y2 = -1;
            } else if (array[i][j + 1] === '0') {
                x2 = j + 1;
                y2 = i;
            }
        }
    } else {
        x2 = -1;
        y2 = -1;
    }
}

function coordsBottom(i, j) {
    if (array[i + 1] !== undefined && array[i + 1][j] !== undefined) {
        if (array[i + 1][j] === '0') {
            x3 = j;
            y3 = i + 1;
        } else if (array[i + 1][j] !== '0') {
            do {
                i = i + 1;
            } while (array[i + 1] !== undefined && array[i + 1][j] !== '0');

            if (array[i + 1] === undefined) {
                x3 = -1;
                y3 = -1;
            } else if (array[i + 1][j] === '0') {
                x3 = j;
                y3 = i + 1;
            }
        }
    } else {
        x3 = -1;
        y3 = -1;
    }
}

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (array[i][j] === '0') {
            showCoords(i, j);
            coordsRight(i, j);
            coordsBottom(i, j);

            let answer = ` ${ x1 } ${ y1 } ${ x2 } ${ y2 } ${ x3 } ${ y3}`;
            console.log(answer);
        }
    }
}
