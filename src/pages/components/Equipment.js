const Equipment = ({gear, picture, text, index}) => {
    return (
        <div className="flex justify-center p-1">
            <div className="">
                <h1 className="flex justify-center">{gear}</h1>
                <div className="flex p-3">
                    <img className="px-3" src={require('../img/' + picture)}/>

                    <p className="px-3">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Equipment;