import React from "react";
import { Link } from "react-router-dom";
import { hexlogo } from "../assets";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className=" flex justify-between w-[100%] h-auto">
        <div>
          <Link to="/">
            <img src={hexlogo} className=" Navlogo"/>
          </Link>
        </div>
        <div className=" pr-5">
          <ul className=" pt-4 h-full flex">
            <li className=" p-3 text-3xl">
              <Link to="/goals" className=" text-center">Goals</Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;