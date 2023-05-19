import React from "react";
import { NavLink } from "react-router-dom";
import { hexlogo } from "../assets";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className=" flex justify-between w-[100%] h-auto">
        <div>
          <NavLink to="/">
            <img src={hexlogo} className=" Navlogo"/>
          </NavLink>
        </div>
        <div className=" pr-5">
          <ul className=" pt-4 h-full flex">
            <li className=" p-3 text-3xl">
              <NavLink to="/goals" className={({ isActive }) => (isActive ? 'LinkActive' : 'LinkInactive')}>
                Goals
              </NavLink>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;