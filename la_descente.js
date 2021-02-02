// game loop
while (true) {
    let highestMountain = 0;
    let mountainFire = 0;

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.

        if (mountainH > highestMountain) {
            highestMountain = mountainH;
            mountainFire = i;
        }
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    console.log(mountainFire); // The index of the mountain to fire on.
}
