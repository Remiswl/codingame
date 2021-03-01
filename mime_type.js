const N = parseInt(readline());
const Q = parseInt(readline());
let mimeTypes = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase();
    const MT = inputs[1];

    mimeTypes.push(EXT, MT);
}

for (let i = 0; i < Q; i++) {
    let FNAME = readline();
    let dot = FNAME.lastIndexOf('.');

    if (FNAME.lastIndexOf('.') >= 0 && FNAME.slice(dot + 1).length > 0) {
        FNAME = FNAME.slice(dot + 1);

        for (let j = 0; j < mimeTypes.length; j++) {
            if (FNAME.toLowerCase() == mimeTypes[j].toLowerCase()) {
                console.log(mimeTypes[j + 1]);
            }
        }

        if (mimeTypes.includes(FNAME.toLowerCase()) === false) {
            console.log('UNKNOWN');
        }
    } else {
        console.log('UNKNOWN');
    }
}
