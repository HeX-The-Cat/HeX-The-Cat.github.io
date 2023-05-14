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
          <div className=" bg-slate-800">
            <Navbar />
          </div>

          <div className="">
            <Outlet />
          </div>

          <div className=" FooterCSS bg-slate-800 rounded-t-3xl" >
            <Footer /> 
          </div>

        </div>
      </div>
    </>
  );
};

export default Layout;