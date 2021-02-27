const N = parseInt(readline());
const Q = parseInt(readline());


for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0];
    const MT = inputs[1];
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline().split('.');

    if (FNAME[1] == 'gif') {
        console.log('image/gif');
    } else if (FNAME[1] == 'png') {
        console.log('image/png');
    } else if (FNAME[1] == 'html') {
        console.log('text/html');
    } else {
        console.log('UNKNOWN');
    }
}
