import React from "react";
import './PopUp.css';
import ket from './sleepy_ket.png'

const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner flex justify-center border border-white">
                <img src={ket} />
                <p>This page is being developed by person with sleep schedule and energy levels of a lazy cat, please have patience as it is being made</p>
                <button className="close-btn px-1 text-xl" onClick={() => props.setTrigger(false)}> close </button>
            </div>
        </div>
    ) : "";
}

export default PopUp;