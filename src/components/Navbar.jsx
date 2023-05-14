import React from "react";
import { Link } from "react-router-dom";
import { hexlogo } from "../assets";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className=" flex justify-between w-[100%] h-auto NavbarMain">
        <div>
          <Link to="/">
            <img src={hexlogo} className=" Navlogo"/>
          </Link>
        </div>
        <div>
          <ul className=" h-full flex justify-center">
            <li className=" p-3 text-3xl">
              <Link to="/goals">Goals</Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;