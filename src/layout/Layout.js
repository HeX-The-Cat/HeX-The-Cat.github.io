import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className=" flex h-screen">
      <div>

        <div className="NavBarHeight">
          <NavBar />
        </div>

        <div className="OutletHeight OutletNoScrollBar w-screen flex justify-center">
          <div className="pageWidth">
            <Outlet />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Layout;