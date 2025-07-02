import { suitIcons } from "./Deck";

function Card({ suit, rank }) {
  return (
    <div className="bg-white text-black p-3 rounded shadow-md w-14 text-center">
      <div className="text-sm font-bold">{rank}</div>
      <div className="text-xl">{suitIcons[suit]}</div>
    </div>
  );
}

export default Card