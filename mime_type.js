const N = parseInt(readline());
const Q = parseInt(readline());


for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0];
    const MT = inputs[1];

    console.log(EXT, MT);
}

for (let i = 0; i < Q; i++) {
    const FNAME = readline();

    console.log(FNAME);
}

console.log('UNKNOWN');
