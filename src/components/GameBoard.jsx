import { useState, useEffect } from "react";
import { createDeck, shuffleDeck } from "./Deck";
import Card from "./Card";

function Gameboard() {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);

  const startGame = () => {
    const newDeck = shuffleDeck(createDeck());
    const playerCards = [newDeck.pop(), newDeck.pop()];
    const dealerCards = [newDeck.pop(), newDeck.pop()];

    setPlayerHand(playerCards);
    setDealerHand(dealerCards);
    setDeck(newDeck);
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="bg-green-800 p-6 w-full min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Blackjack Game</h1>
      <div className="flex justify-around mb-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Dealer's Hand</h2>
          <div className="flex gap-2">
            {dealerHand.map((card, index) => (
              <Card key={`dealer-${index}`} suit={card.suit} rank={card.rank} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Player's Hand</h2>
          <div className="flex gap-2">
            {playerHand.map((card, index) => (
              <Card key={`player-${index}`} suit={card.suit} rank={card.rank} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-bold text-black"
          onClick={startGame}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default Gameboard;