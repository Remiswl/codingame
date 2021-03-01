const N = parseInt(readline());
const Q = parseInt(readline());
let mimeTypes = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase();
    const MT = inputs[1];

    mimeTypes[EXT] = MT;
}

for (let i = 0; i < Q; i++) {
    let FNAME = readline();
    let dot = FNAME.lastIndexOf('.');

    if (FNAME.lastIndexOf('.') >= 0 && FNAME.slice(dot + 1).length > 0) {
        FNAME = FNAME.slice(dot + 1);

        if (mimeTypes.hasOwnProperty(FNAME.toLowerCase()) === true) {
            console.log(mimeTypes[FNAME.toLowerCase()]);
        } else {
            console.log('UNKNOWN');
        }
    } else {
        console.log('UNKNOWN');
    }
}
