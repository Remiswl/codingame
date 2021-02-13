let message = readline();
let binaryMessage = '';


for (let i = 0; i < message.length; i++) {
    let binaryLetter = message[i].charCodeAt().toString(2);

    if (binaryLetter.length < 7) {
        binaryLetter = 0 + binaryLetter;
    }

    binaryMessage = binaryMessage + binaryLetter;
}

let encode = {
    0 : '00',
    1 : '0'
};

let currentBit = binaryMessage[0];
let unaireMessage = `${encode[currentBit] } ${ 0}`;

for (let i = 1; i < binaryMessage.length; i++) {
    let nextBit = binaryMessage[i];

    if (nextBit == currentBit) {
        unaireMessage = unaireMessage + 0;
    } else {
        unaireMessage = `${unaireMessage } ${ encode[nextBit] } ${ 0}`;
    }

    currentBit = nextBit;
}

console.log(unaireMessage);
