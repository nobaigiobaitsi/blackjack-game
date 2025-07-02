{/*
    Ok, so the deck has 52 cards.
    There are four "suits" (spade, heart, diamond, club).
    There are 13 "ranks" (A, 2–10, J, Q, K).
    Therre is also the value for each card.
    */}


const suits = ["Heart", "Diamond", "Club", "Spade"];

const ranks = [
    { rank: "A", value: 11 },
    { rank: "2", value: 2 },
    { rank: "3", value: 3 },
    { rank: "4", value: 4 },
    { rank: "5", value: 5 },
    { rank: "6", value: 6 },
    { rank: "7", value: 7 },
    { rank: "8", value: 8 },
    { rank: "9", value: 9 },
    { rank: "10", value: 10 },
    { rank: "J", value: 10 },
    { rank: "Q", value: 10 },
    { rank: "K", value: 10 },
];

//This is how we make the deck
export function createDeck() {
  const deck = [];
  for (let suit of suits) {
    for (let { rank, value } of ranks) {
      deck.push({ suit, rank, value });
    }
  }
  return deck;
}

//This is how we shuffle it
//Fisher–Yates shuffle method
export function shuffleDeck(deck) {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}