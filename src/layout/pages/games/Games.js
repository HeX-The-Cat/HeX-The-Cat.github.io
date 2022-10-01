import { useTransition } from "react";
import Game from "./components/Game";
import GamesJson from "./components/Games.json"

const Games = () => {
    return (
        <div className=" h-auto ">
            {GamesJson.map((item, index) => {
                return(
                    <Game
                        index={item.index}
                        key={item.game + index}
                        game={item.game}
                        video={item.video}
                        image={item.image}
                        text={item.text}
                        background={item.background}
                    />
                )
            })}
        </div>
    );
}

export default Games;