const Game = ({game, video, text, background, index}) => {
    return (
        <div className="flex justify-center p-1">
            <div>
                <h1>{game}</h1>
            </div>
        </div>
    );
}

export default Game;