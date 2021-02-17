while (true) {
    for (let i = 0; i < 2; i++) {
        var inputs = readline().split(' ');
        const playerHealth = parseInt(inputs[0]);
        const playerMana = parseInt(inputs[1]);
        const playerDeck = parseInt(inputs[2]);
        const playerRune = parseInt(inputs[3]);
        const playerDraw = parseInt(inputs[4]);
    }

    var inputs = readline().split(' ');
    const opponentHand = parseInt(inputs[0]);

    const opponentActions = parseInt(inputs[1]);
    for (let i = 0; i < opponentActions; i++) {
        const cardNumberAndAction = readline();
    }

    const cardCount = parseInt(readline());
    for (let i = 0; i < cardCount; i++) {
        var inputs = readline().split(' ');
        const cardNumber = parseInt(inputs[0]);
        const instanceId = parseInt(inputs[1]);
        const location = parseInt(inputs[2]);
        const cardType = parseInt(inputs[3]);
        const cost = parseInt(inputs[4]);
        const attack = parseInt(inputs[5]);
        const defense = parseInt(inputs[6]);
        const abilities = inputs[7];
        const myHealthChange = parseInt(inputs[8]);
        const opponentHealthChange = parseInt(inputs[9]);
        const cardDraw = parseInt(inputs[10]);
    }


    let action1 = 'PICK 1';


    /*
    for (let i = 0; i < ; i ++) {
        if (attack) {
            let action2 = 'PASS ';
        }
    }
    */

    console.log(action1);
}
