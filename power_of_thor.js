var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let thorCurrentPositionX = initialTx;
let thorCurrentPositionY = initialTy;

// game loop
while (true) {
    let moveX;
    let moveY;

    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
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

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(moveY + moveX);
}
