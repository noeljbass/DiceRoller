document.getElementById('rollButton').addEventListener('click', function() {
    const numDice = document.getElementById('numDice').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
        const diceImage = document.createElement('img');
        diceImage.src = `images/dice${roll}.png`; // Assuming you have dice images named dice1.png, dice2.png, etc.
        diceImage.alt = `Dice showing ${roll}`;
        diceImage.className = 'dice';
        resultsDiv.appendChild(diceImage);
    }
});
