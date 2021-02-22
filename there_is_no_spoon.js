const width = parseInt(readline());
const height = parseInt(readline());

let x1, y1, x2, y2, x3, y3;
let table = [];

for (let i = 0; i < height; i++) {
    const line = readline();
    for (let j = 0; j < width; j++) {
        if (line[j] == '0') {
            x1 = j;
            y1 = i;
        }

        if (line[j + 1] != undefined && line[j + 1] == '0') {
            x2 = j + 1;
            y2 = i;
        /* else if (line[j+1] == '.') {
            ???????
        }*/
        else if (line[j+1] == undefined) {
            x2 = -1;
            y2 = -1;
        }

        if (line[i + 1 + j] == '0') {
            x3 = j;
            y3 = i + 1;
        } else if (line[i + 1 + j] == undefined || line[i + 1 + j] == '.') {
            x3 = -1;
            y3 = -1;
        }

        let answer = ` ${ x1 } ${ y1 } ${ x2 } ${ y2 } ${ x3 } ${ y3}`;
        console.log(answer);
    }
}
