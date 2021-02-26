const n = parseInt(readline());
let inputs = readline().split(' ');
let result;

if (inputs == '') {
    result = 0;
} else {
    result = parseInt(inputs[0]);

    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);

        if (Math.abs(t) < Math.abs(result)) {
            result = t;
        } else if (Math.abs(t) == Math.abs(result) && t != result) {
            result = Math.abs(t);
        }
    }
}

console.log(result);
