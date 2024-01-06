
class Player {
    constructor(name, id, cards, score) {
        this.name = name,
            this.id = id,
            this.cards = cards,
            this.score = score

    }
}
const suits = ['<i class="fa-solid fa-heart" style="color: #e00000;"></i>', '<i class="fa-solid fa-diamond" style="color: #e00000;"></i>', '<img src="clubs.png" class="suitsImg disBlock" alt="clubs icon">', '<img src="spades.png" class="suitsImg disBlock" alt="spades icon">'];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let playersCards = [];
let deck = [];
let deckLength
let playerCount
let roundWinnerId




/* ****************************************************************************************** */

function startGame() {

    if (playerCount == 4) {
        deckLength = 13;

        playersCards = [new Player(document.getElementById('firstPlayer').value, '1', [], 0)
            , new Player(document.getElementById('secondPlayer').value, '2', [], 0)
            , new Player(document.getElementById('thirdPlayer').value, '3', [], 0)
            , new Player(document.getElementById('fourthPlayer').value, '4', [], 0)];
    }
    else {
        deckLength = 26
        playersCards = [new Player(document.getElementById('firstPlayer').value, '1', [], 0)
            , new Player(document.getElementById('secondPlayer').value, '2', [], 0)]
    };
    createAndShuffleDeck()
    document.getElementById('starting-menu').style.display = 'none'
    document.getElementById('bgi1').className = 'disNone img'

    document.getElementById('game-container').style.display = 'flex'
    document.getElementById('bgi2').className = 'disBlock img'

}

function add2Players() {
    document.getElementById('playerNames').innerHTML = ``
    playerCount = 2;
    document.getElementById('playerNames').innerHTML = `
                <input type="text" id="firstPlayer" value='player1'>
                <input type="text" id="secondPlayer" value='player2'>
`
    document.getElementById('startingButton').disabled = false
}

function add4Players() {
    document.getElementById('playerNames').innerHTML = ``
    playerCount = 4;
    document.getElementById('playerNames').innerHTML = `
                <input type="text" id="firstPlayer" value='player1'>
                <input type="text" id="secondPlayer" value='player2'>
                <input type="text" id="thirdPlayer" value='player3'>
                <input type="text" id="fourthPlayer" value='player4'>
`
    document.getElementById('startingButton').disabled = false
}

function createAndShuffleDeck() {

    /* CREAT DECK */
    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    /* SHUFFLE */

    for (let j = playerCount - 1; j >= 0; j--) {


        for (let i = 0; i < (deckLength); i++) {

            let r = Math.floor(Math.random() * deck.length);
            (playersCards[j].cards).unshift(deck[r]);
            deck.splice(r, 1);
        }
    }
}



/* PLAYROUND */
function playRound() {
    let biggerr = 0;
    let bigger;
    let randCard;

    document.getElementById('player-container').innerHTML = ``
    for (let playerCard of playersCards) {

        randCard = Math.floor(Math.random() * playerCard.cards.length)
        document.getElementById('player-container').innerHTML += `
        <div>${playerCard.name}
        <br>
        score:${playerCard.score}
        <br>
         <div class='player-card'>${playerCard.cards[randCard].rank} <br> ${playerCard.cards[randCard].suit}</div>
         </div>
            `

        if (playerCard.cards[randCard].rank == 'A') { bigger = 14 }
        else if (playerCard.cards[randCard].rank == 'K') { bigger = 13 }
        else if (playerCard.cards[randCard].rank == 'Q') { bigger = 12 }
        else if (playerCard.cards[randCard].rank == 'J') { bigger = 11 }
        else { bigger = playerCard.cards[randCard].rank }
        if (bigger > biggerr) {
            biggerr = bigger
            roundWinnerId = playerCard.id;
        }
        (playerCard.cards).splice(randCard, 1);

    }
    checkRoundWinner()
    checkWinner()

}
/* check round winner */
function checkRoundWinner() {

    let roundWinner = playersCards.find((i) => { return roundWinnerId == i.id })
    roundWinner.score++;
}


/*  checkWinner */
function checkWinner() {
    let id
    if (playersCards[0].cards.length == 0) {
        let c = 0

        /* check final scores */
        let winner = playersCards.sort(function (a, b) { return a.score - b.score })
        document.getElementById('result').innerHTML += `Final Scores: <br>`
        for (let i = winner.length - 1; i >= 0; i--) {
            document.getElementById('result').innerHTML += `${winner[i].name} :${winner[i].score} <br>`
        }

        document.getElementById('result').innerHTML += `<button type="button" id="resetButton" class="btn btn-outline-light disBlock w-50" onclick="endGame()">Back to starting menu</button>`
        document.getElementById('card-container').style.display = 'none'

    }

    /* end game */
}

function endGame() {
    document.getElementById('card-container').style.display = 'block'
    document.getElementById('result').innerHTML = `<button type="button" id="resetButton" class="btn btn-outline-success disNone" onclick="endGame()">Rest</button>`
    document.getElementById('starting-menu').style.display = 'grid'
    document.getElementById('bgi1').className = 'disBlock img'
    document.getElementById('startingButton').disabled = true
    document.getElementById('game-container').style.display = 'none'
    document.getElementById('bgi2').className = 'disNone'

    document.getElementById('playerNames').innerHTML = ``
    document.getElementById('player-container').innerHTML = ``
}