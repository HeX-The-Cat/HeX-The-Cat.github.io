const Equipment = ({gear, picture, text, background, index}) => {
    return (
        <div className="flex justify-center p-1">
            <div>
                <h1>{gear}</h1>
            </div>
        </div>
    );
}

export default Equipment;