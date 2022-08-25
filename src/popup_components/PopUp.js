import React from "react";
import './PopUp.css';
import ket from './sleepy_ket.png'

const PopUp = (props) => {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner border border-white">
                <div className=" md:flex justify-center">
                    <img className="md:shrink-0" src={ket} />
                    <p>This page is being developed by person with sleep schedule and energy levels of a lazy cat, please have patience. There is yet no guarantee over how this thing works on mobile, currently deving is focused on desktop.</p>
                </div>
                <div className="flex justify-center">
                    <button className="close-btn px-1 text-xl" onClick={() => props.setTrigger(false)}> close </button>
                </div>
            </div>
            
        </div>
    ) : "";
}

export default PopUp;