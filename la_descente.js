while (true) {
    let highestMountain = 0;
    let mountainFire = 0;

    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline());

        if (mountainH > highestMountain) {
            highestMountain = mountainH;
            mountainFire = i;
        }
    }

    console.log(mountainFire);
}
