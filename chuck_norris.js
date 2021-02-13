// 1. Transform the message in a binary message
const binaryMessage = readline().charCodeAt().toString(2);
let unaireMessage = '';

let encode = {
    0 : '00',
    1 : '0'
};

// 2. Identify the 1st digit
// and write the first bloc of code (first bit x 1)
let currentBit = binaryMessage[0];
unaireMessage = `${encode[currentBit] } ${ 0}`;

// 3. For the rest of the message
// read each digit
for (let i = 1; i < binaryMessage.length; i++) {
    let nextBit = binaryMessage[i];

    // If the digit is equal to the previous one
    // add a zero to the unaire message
    if (nextBit == currentBit) {
        unaireMessage = unaireMessage + 0;
    }
    // else add a space, the code of the digit (0 or 00)
    // and a 0 to count the first new digit
    else {
        unaireMessage = `${unaireMessage } ${ encode[nextBit] } ${ 0}`;
    }

    // Once the 2nd bit was analyzed,
    // the 2nd bit become the (i-1)th bit
    currentBit = nextBit;
}

console.log(unaireMessage);

// How to convert text to binary code:
// 1. Convert every char using charCodeAt function to get the Ascii Code in decimal (UTF-16 code)
// 2. Convert it to Binary value using toString(2)
// check the result on https://www.rapidtables.com/code/text/ascii-table.html
