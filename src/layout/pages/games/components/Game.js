

const Game = ({game, video, text, image, background, index}) => {
    return (
        <div className="flex justify-center pb-3">
            <div className=" ">
                <h1 className="flex justify-center">{game}</h1>
                <div className="flex justify-center items-center p-3">
                    <div className="flex justify-center">

                        {video.length > 0 &&
                            <iframe 
                            width="854"
                            height="480"
                            src={video}
                            title="YouTube video player"
                            allowFullScreen />
                        }  

                        {image.length > 0 &&
                            <img className="GameImage" src={require('../img/' + image)}/>
                        }

                    </div>
                    <div className="flex justify-center">
                        <p className=" text-center px-3"> &#60;PH&#62; {text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;