const binaryMessage = readline().charCodeAt().toString(2);
let arrayMessage = [];
let unaireMessage = '';

for (let i = 0; i < binaryMessage.length; i++) {
    arrayMessage.push(parseInt(binaryMessage[i]));
}

// Pour chacun des éléments du tableau,
for (let i = 0; i < arrayMessage.length; i++) {
    // on identifie le premier élément
    // puis on continue à lire le tableau
    // dès qu'on change de chiffre, on arrête la boucle
    // et on compte le nombre d'occurence du nombre
    // puis on reprend la boucle

    unaireMessage = unaireMessage + secondBloc(i);
}

function firstBloc(i) {
    if (arrayMessage[i] == 0) {
        unaireMessage = `${unaireMessage }${00 }`;
    } else {
        unaireMessage = `${unaireMessage }${0 }`;
    }

    return unaireMessage;
}

function secondBloc(i) {
    for (let j = 0; j < arrayMessage.length; j++) {
        let bitCount = 0;

        if (arrayMessage[j] === arrayMessage [i]) {
            bitCount++;
            return bitCount;
        } else if (arrayMessage[j] !== arrayMessage [i]) {
            break;
        }
    }
}

console.log(binaryMessage);
console.log(unaireMessage);


// How to convert text to binary code:
// 1. Convert every char using charCodeAt function to get the Ascii Code in decimal (UTF-16 code)
// 2. Convert it to Binary value using toString(2)
// check the result on https://www.rapidtables.com/code/text/ascii-table.html
