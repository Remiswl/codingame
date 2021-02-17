let inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const N = parseInt(readline());
inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let currentX = X0;
let currentY = Y0;

let jumpX = 0;
let jumpY;

while (true) {
    const bombDir = readline().split('');

    if (bombDir[0] == 'D') {
        jumpY = currentY + 1;
        currentY = jumpY;
    } else if (bombDir[0] == 'U') {
        jumpY = currentY - 1;
        currentY = jumpY;
    } else if (bombDir[0] == 'R') {
        jumpX = currentX + 1;
        currentX = jumpX;
    } else if (bombDir[0] == 'L') {
        jumpX = currentX - 1;
        currentX = jumpX;
    }

    if (bombDir[1] != 'undefined' && bombDir[1] == 'R') {
        jumpX = currentX + 1;
        currentX = jumpX;
    } else if (bombDir[1] != 'undefined' && bombDir[1] == 'L') {
        jumpX = currentX - 1;
        currentX = jumpX;
    }

    console.log(jumpX, jumpY);
}
