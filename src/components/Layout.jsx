import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div >
        <div className=" h-screen">

          <div className=" flex h-1/6 ">

            <p className="">Hee hee</p>

            <div className=" ">
              <Navbar />
            </div>
          
          </div>

          <div className="">
            <Outlet />
          </div>

          <div className=" FooterCSS bg-slate-800 overflow-x-hidden rounded-t-3xl" >
            <Footer /> 
          </div>

        </div>
      </div>
    </>
  );
};

export default Layout;