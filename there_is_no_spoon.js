const width = parseInt(readline());
const height = parseInt(readline());

let x1, y1, x2, y2, x3, y3;


for (let i = 0; i < height; i++) {
    const line = readline();

    if (line[i] == '0') {
        x1 = i;
        y1 = 0;
    }

    if (line[i + 1] != undefined && line[i + 1] == '0') {
        x2 = i + 1;
        y2 = 0;
    } else if (line[i + 1] != undefined && line[i + 1] == '.') {
        x2 = -1;
        y2 = -1;
    }

    x3 = 0;
    y3 = 1;

    let answer = ` ${ x1 } ${ y1 } ${ x2 } ${ y2 } ${ x3 } ${ y3}`;
    console.log(answer);
}
