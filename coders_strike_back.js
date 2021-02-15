while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]);
    const nextCheckpointY = parseInt(inputs[3]);
    const nextCheckpointDist = parseInt(inputs[4]);
    const nextCheckpointAngle = parseInt(inputs[5]);
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);

    let thrust;

    if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90) {
        thrust = 10;
    } else if (nextCheckpointDist > 3000) {
        thrust = 'BOOST';
    } else {
        thrust = 100;
    }

    if (Math.abs(x - opponentX) < 5 || Math.abs(y - opponentY) < 5) {
        thrust = 0;
    }


    console.log(`${nextCheckpointX } ${ nextCheckpointY } ${ thrust}`);
}
