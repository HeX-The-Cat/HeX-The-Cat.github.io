import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className=" h-screen bg-yellow-500">

        <div className=" flex h-1/6 ">

          <p className="">Hee hee</p>

          <div className=" ">
            <Navbar />
          </div>
          
        </div>
        
        <div className=" bg-blue-500">
          <Outlet />
        </div>

        <div className=" h-1/6 bg-red-500">
          <Footer /> 
        </div>

      </div>
    </>
  );
};

export default Layout;