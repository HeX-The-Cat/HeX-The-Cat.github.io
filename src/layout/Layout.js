import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className=" flex h-screen">
      <div>

        <div className=" fixed w-full NavBarHeight group NavBarBG">
          <p className=" fixed w-full NavBarDots">~ ~ ~ ~ ~</p>
          <div className="  fixed w-full NavBarItem">
            <NavBar />
          </div>
        </div>

        <div className="OutletHeight OutletNoScrollBar w-screen flex justify-center">
          <div className="pageWidth pt-16">
            <Outlet />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Layout;




//