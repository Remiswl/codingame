const binaryMessage = readline().charCodeAt().toString(2);
let arrayMessage = [];
let unaireMessage = '';

for (let i = 0; i < binaryMessage.length; i++) {
    arrayMessage.push(parseInt(binaryMessage[i]));
}

// Pour chacun des éléments du tableau,
for (let i = 0; i < arrayMessage.length; i++) {
    console.log(arrayMessage[i]);

    // on identifie le premier élément
    if (arrayMessage[i] == 0) {
        unaireMessage = `${unaireMessage }${00 }`;
    } else {
        unaireMessage = `${unaireMessage }${0 }`;
    }

    // puis on continue à lire le tableau
    // dès qu'on change de chiffre, on arrête la boucle
    // et on compte le nombre d'occurence du nombre
    let bitCount = 0;

    for (let j = 0; j < arrayMessage.length; j++) {
        console.log(arrayMessage[j], arrayMessage [i]);

        // while (arrayMessage[j] = arrayMessage [i]) {
        //    bitCount ++;
        // }
    }

    console.log(bitCount);
    // puis on reprend la boucle
}

console.log(arrayMessage);
console.log(unaireMessage);


// How to convert text to binary code:
// 1. Convert every char using charCodeAt function to get the Ascii Code in decimal (UTF-16 code)
// 2. Convert it to Binary value using toString(2)
// check the result on https://www.rapidtables.com/code/text/ascii-table.html
