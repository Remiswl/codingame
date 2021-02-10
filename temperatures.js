/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
let inputs = readline().split(' ');
let result;


if (inputs == '') {
    result = 0;
} else {
    result = parseInt(inputs[0]);

    for (let i = 0; i < n; i++) {
        const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526

        if (Math.abs(t) < Math.abs(result)) {
            result = t;
        } else if (Math.abs(t) == Math.abs(result) && t != result) {
            result = Math.abs(t);
        }
    }
}

console.log(result);
