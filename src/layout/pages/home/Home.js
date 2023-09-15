const Home = () => {
    return (
        <div className=" h-auto ">
            <h1 className=" text-center">
                This webpage is a personal project for learning coding and test bed.
            </h1>
                <p className=" text-center">
                <br/>
                Feel free to browse around, maybe something catches your fancy.<br/>
                <br/>
            </p>
            <p className=" text-center">
                Also created website for&nbsp;<u><a href="https://brokencodegames.github.io/" target="_blank" rel="noopener noreferrer">Broken Code Games</a></u> as a part of uni's work trainee period.<br/>
                They wanted older looking web page so that's what I tried my best to do.<br/>
                The development of the game has sadly come to an end without release.
                <br/><br/>
                Whole page is going through rewrite from React to Svelte, but this old React version will do until I manage to iron out some kinks from the new code.<br/>
                ThreeJS is causing some odd curves on the way..
            </p>
        </div>
    );
}

export default Home;