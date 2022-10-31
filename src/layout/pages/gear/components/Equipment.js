import dangerouslySetInnerHTML from "react";
import "./equipment.css"

const Equipment = ({gear, image, text, index}) => {
    return (
        <div className="  pb-3">
            <div className="">
                <h1 className=" flex justify-center">{gear}</h1>
                <div className=" basic-grid">
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