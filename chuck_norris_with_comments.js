let message = readline();
let binaryMessage = '';

// 1. Message from text to binary
for (let i = 0; i < message.length; i++) {
    let binaryLetter = message[i].charCodeAt().toString(2);

    // Attention: each letter should consist of 7-digit binary sequence
    if (binaryLetter.length < 7) {
        binaryLetter = 0 + binaryLetter;
    }

    binaryMessage = binaryMessage + binaryLetter;
}

// 2. Message from binary to unary
// 2.1. Identify the 1st digit
// and write the first bloc of code (first bit x 1)
let encode = {
    0 : '00',
    1 : '0'
};

let currentBit = binaryMessage[0];
let unaireMessage = `${encode[currentBit] } ${ 0}`;

// 2.2. For the rest of the message
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
// compare the result with https://www.rapidtables.com/code/text/ascii-table.html
