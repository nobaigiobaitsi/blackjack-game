

function Gameboard() {
    return(
    <>
    <div className="bg-green-800 p-6 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Blackjack Game</h1>
        <div className="flex justify-between mb-6">
            <div>
                <h2 className="text-xl font-semibold mb-2">Dealer</h2>
                <div className="flex gap-2"></div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">Player</h2>
                <div className="flex gap-2"></div>
            </div>
        </div>
        <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded font-bold">Start Game</button>
        </div>
    </div>

    </>
    )
}

export default Gameboard