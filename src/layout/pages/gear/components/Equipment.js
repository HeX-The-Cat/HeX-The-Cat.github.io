import dangerouslySetInnerHTML from "react";

const Equipment = ({gear, image, text, index}) => {
    return (
        <div className=" flex justify-center p-1">
            <div className="">
                <h1 className=" flex justify-center">{gear}</h1>
                <div className=" flex justify-center items-center">
                    {image.length > 0 &&
                            <img className="GearImage" src={require('../img/' + image)}/>
                    }

                    <div className=" w-1/2">
                        <div dangerouslySetInnerHTML={{__html: text}} className="text-white text-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Equipment;