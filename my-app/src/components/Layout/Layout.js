/* eslint-disable react/jsx-no-undef */
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from '../Nav/Navbar';




const Layout = ()=>{
    return(
        <Fragment>
        
             <Navbar/>
            
             
             <main>
                <Outlet/>
             </main>
             <Footer/>
        </Fragment>
  
    )
}
export default Layout;