let inputs = readline().split(' ');
const W = parseInt(inputs[0]);
const H = parseInt(inputs[1]);
const N = parseInt(readline());
inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let previousX = W;
let previousY = H;

let currentX = X0;
let currentY = Y0;

let jumpX = 0;
let jumpY = 0;

while (true) {
    const bombDir = readline().split('');

    if (bombDir[0] == 'D') {
        jumpY = (previousY - currentY) / 2;
        jumpY = currentY + Math.round(Math.abs(jumpY));
        previousY = currentY;
        currentY = jumpY;
    } else if (bombDir[0] == 'U') {
        jumpY = (currentY - previousY) / 2;
        jumpY = currentY - Math.round(Math.abs(jumpY));
        previousY = currentY;
        currentY = jumpY;
    }

    if (bombDir[0] == 'R' || bombDir[1] != 'undefined' && bombDir[1] == 'R') {
        jumpX = (previousX - currentX) / 2;
        jumpX = currentX + Math.round(Math.abs(jumpX));
        previousX = currentX;
        currentX = jumpX;
    } else if (bombDir[0] == 'L' || bombDir[1] != 'undefined' && bombDir[1] == 'L') {
        jumpX = (currentX - previousX) / 2;
        jumpX = currentX - Math.round(Math.abs(jumpX));
        previousX = currentX;
        currentX = jumpX;
    }

    if (jumpX < 0) {
        jumpX = 0;
    } else if (jumpX >= W) {
        jumpX = W - 1;
    }

    if (jumpY < 0) {
        jumpY = 0;
    } else if (jumpY >= H) {
        jumpY = H - 1;
    }

    console.log(jumpX, jumpY);
}
