const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck() {
	for (let i=0; i<suits.length; i++) {
		for (let j=0; j<values.length; j++)
		{
			let card = {
				Value: values[j], 
				Suit: suits[i]};
				deck.push(card); 
		}
	}
	return deck;
}
buildDeck()

// The issue is here, if you run node main.js, you will see in the console
// that that the object actually appears in a pair of brackets, so the key value pair
// is actually an array with an index of 0.  How do you get rid of the brackets?
//  Or convert to an object to reference the properties needed?
function dealCardsToPlayers() {
	 player1Card = deck.splice(Math.floor(Math.random()*deck.length), 1);
	 player2Card = deck.splice(Math.floor(Math.random()*deck.length), 1);
	 return player1Card, player2Card;

}

function announceCards() {
	console.log(player1Card);
	console.log(player2Card);
}

function cardToRank() {
	var Player1Rank = values.indexOf(player1Card[0].Value) + 2;
	var Player2Rank = values.indexOf(player2Card[0].Value) + 2;
}


function announceWinner() {
}
function returnCardsToDeck() {
}
function playGame() {
  dealCardsToPlayers();
  announceCards();
  cardToRank();
  announceWinner();
  returnCardsToDeck();
}


buildDeck();
playGame();