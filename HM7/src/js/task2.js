let confirmation = confirm('Do you want to play a game?');

if (!confirmation) {
    alert('You did not become a billionaire, but can.');
} else {
    let userNum, prize = 0,
        wonnaGo = true,
        prizeMultiplier = 1,
        maxRange = 8 + 1, //+1 becouse of Math.random synthax
        randNum;

    for (randNum = Math.floor(Math.random() * (maxRange)); wonnaGo; prizeMultiplier *= 2, maxRange += 4) {
        for (let i = 0, possiblePrize = 100 * prizeMultiplier; i < 4; i++, possiblePrize /= 2) {
            if (i === 3) {
                alert(`Thank you for your participation. Your prize is: ${prize}`);
                break;
            }

            userNum = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxRange - 1} 
                                Attempts left: ${i}
                                Total pize:${prize}$
                                Possible prize on current attempt: ${possiblePrize}`, ''));
            if (userNum === randNum) {
                switch (i) {
                    case 0:
                        prize = possiblePrize;
                        break;
                    case 1:
                        prize = possiblePrize;
                        break;
                    case 2:
                        prize = possiblePrize;
                        break;
                }
                alert(`Congratulation, you won!   Your prize is:${prize}`);
                break;
            }
        }

        wonnaGo = confirm('Do you want to continue?');
    }
}