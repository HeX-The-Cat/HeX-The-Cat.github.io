import React from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";

const Layout = () => {
  return (
    <div className=" flex justify-center h-screen">
        <div className=" pageWidth">
            <div className="NavNoScrollBar">
              <NavBar />
            </div>

            <div className="ContentNoScrollBar">
              <Outlet />
            </div>
        </div>
    </div>
  );
};

export default Layout;