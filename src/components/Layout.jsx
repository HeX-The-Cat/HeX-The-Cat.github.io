import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className=" relative  min-h-screen">
        <div className=" NavbarCSS bg-slate-800 bg-opacity-80 rounded-b-3xl ">
          <Navbar />
        </div>

        <div className=" ">
          <Outlet />
        </div>
        <div className="h-[10rem]"/>

        <div className=" FooterCSS bg-slate-800 bg-opacity-80 rounded-t-3xl absolute inset-x-0 bottom-0" >
          <Footer /> 
        </div>
      </div>
    </>
  );
};

export default Layout;