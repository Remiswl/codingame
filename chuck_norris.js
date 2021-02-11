const MESSAGE = readline().charCodeAt().toString(2);

console.log(MESSAGE);

let array = [];

for (let i = 0; i < MESSAGE.length; i++) {
    array.push(parseInt(MESSAGE[i]));
}

console.log(array);

for (let j = 0; j < array.length; j++){
    let integersCount;

    if (array[j] == 1) {

    }
}

function (){

}

console.log('answer');


// How to convert text to binary code:
// 1. Convert every char using charCodeAt function to get the Ascii Code in decimal (an integer between 0 and 65535) (UTF-16 code)
// 2. Convert it to Binary value (base 2) using toString(2)
// text/decimal/binary conversion: https://www.rapidtables.com/code/text/ascii-table.html