let inputs = readline().split(' ');
let maxX = parseInt(inputs[0]);
let minX = 0;
let maxY = parseInt(inputs[1]);
let minY = 0;
const N = parseInt(readline());
inputs = readline().split(' ');
let currentX = parseInt(inputs[0]);
let currentY = parseInt(inputs[1]);

let jumpToX = 0;
let jumpToY = 0;

while (true) {
    const bombDir = readline().split('');

    if (bombDir[0] == 'D') {
        jumpToY = currentY + Math.round(Math.abs((maxY - currentY) / 2));
        minY = currentY;
        currentY = jumpToY;
    } else if (bombDir[0] == 'U') {
        jumpToY = currentY - Math.round(Math.abs((currentY - minY) / 2));
        maxY = currentY;
        currentY = jumpToY;
    }

    if (bombDir[0] == 'R' || bombDir[1] != 'undefined' && bombDir[1] == 'R') {
        jumpToX = currentX + Math.round(Math.abs((maxX - currentX) / 2));
        minX = currentX;
        currentX = jumpToX;
    } else if (bombDir[0] == 'L' || bombDir[1] != 'undefined' && bombDir[1] == 'L') {
        jumpToX = currentX - Math.round(Math.abs((currentX - minX) / 2));
        maxX = currentX;
        currentX = jumpToX;
    }

    console.log(jumpToX, jumpToY);
}
