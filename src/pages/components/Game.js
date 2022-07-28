

const Game = ({game, video, text, background, index}) => {
    return (
        <div className="flex justify-center py-5">
            <div className=" ">
                <h1 className="flex justify-center">{game}</h1>
                <div className="lg:flex justify-center items-center p-3">
                    <div className="flex justify-center">
                        <iframe 
                            width="560"
                            height="315"
                            src={video}
                            title="YouTube video player"/>
                    </div>
                    <div className="flex justify-center">
                        <p className=" text-center px-3">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;