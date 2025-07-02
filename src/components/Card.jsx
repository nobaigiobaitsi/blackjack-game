function Card({ suit, rank }) {
  const colorClass = (suit === "♥" || suit === "♦") ? "text-red-500" : "text-black";

  return (
    <div className="bg-white rounded-md w-20 h-28 flex flex-col justify-between p-2 shadow-md">
      <div className={`text-2xl font-bold ${colorClass}`}>{rank}</div>
      <div className={`text-3xl text-center ${colorClass}`}>{suit}</div>
    </div>
  );
}

export default Card;