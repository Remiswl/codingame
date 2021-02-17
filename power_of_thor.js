var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]);
const lightY = parseInt(inputs[1]);
const initialTx = parseInt(inputs[2]);
const initialTy = parseInt(inputs[3]);

let thorCurrentPositionX = initialTx;
let thorCurrentPositionY = initialTy;

while (true) {
    let moveX;
    let moveY;

    const remainingTurns = parseInt(readline());

    if (thorCurrentPositionX < lightX) {
        moveX = 'E';
        thorCurrentPositionX++;
    } else if (thorCurrentPositionX > lightX) {
        moveX = 'W';
        thorCurrentPositionX--;
    } else {
        moveX = '';
    }

    if (thorCurrentPositionY < lightY) {
        moveY = 'S';
        thorCurrentPositionY++;
    } else if (thorCurrentPositionY > lightY) {
        moveY = 'N';
        thorCurrentPositionY--;
    } else {
        moveY = '';
    }

    console.log(moveY + moveX);
}
