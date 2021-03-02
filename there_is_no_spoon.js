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

/*
Tests:
    1: array = [['0', '0'],['0','.']];
    2: array = [[ '0', '.', '0', '.', '0' ]];
    3: array = [[ '0' ], [ '0' ], [ '0' ], [ '0' ]];
    4: array = [[ '0', '.', '0' ], [ '.', '.', '.' ], [ '0', '.', '0' ]];
    5: array = [['0', '0', '0' ], [ '.', '0', '.' ], [ '.', '0', '.' ]];
    6: ;
    7: ;
    8: ;
*/

for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if (array[j][i] === '0') {
            x1 = j;
            y1 = i;
        }

        if (array[j + 1] !== undefined && array[j + 1][i] === '0') {
            x2 = j + 1;
            y2 = i;
        } else if (array[j + 1] === undefined || array[j + 1][i] !== '0') {
            x2 = -1;
            y2 = -1;
        }

        if (array[i + 1] !== undefined && array[j][i + 1] === '0') {
            x3 = j;
            y3 = i + 1;
        } else if (array[i + 1] === undefined || array[j][i + 1] !== '0') {
            x3 = -1;
            y3 = -1;
        }

        let answer = ` ${ x1 } ${ y1 } ${ x2 } ${ y2 } ${ x3 } ${ y3}`;
        console.log(answer);
    }
}
