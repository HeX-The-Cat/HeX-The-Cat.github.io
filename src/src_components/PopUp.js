import React from "react";
import './PopUp.css';

const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div>This page is being developed by person with sleep schedule and energy levels of a lazy cat, please have patience as it is being made</div>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            </div>
        </div>
    ) : "";
}

export default PopUp;