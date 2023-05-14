import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className=" h-full items-center">
        <ul className=" h-full flex items-stretch justify-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;