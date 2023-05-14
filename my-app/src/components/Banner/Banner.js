/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './Banner.css'
import download from '../../ASSESTS/Banner/download.png'
import download1 from '../../ASSESTS/Banner/download1.png'
const Banner = (props)=>{
    return(
        <section className="banner">
            <div className="container">
           
            <div className="row">
           <div className="col-lg-12 col-md-12">
           <div className="page-banner">
                
                </div>
                 <h2>{props.title}</h2>
                 <li>
                 <Link to="/home">
                 <FontAwesomeIcon icon={faHome}/> home
                 </Link>
                   /   {props.smtitle}
                </li>
                
                
           </div>
           </div>
           </div>
           <img className="pt-img1 animate-wave " src={download}/>
           <img className="pt-img2 " src={download1}/>
        </section>
    )
}

export default Banner;