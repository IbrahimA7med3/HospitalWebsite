/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import footerlogo from '../../ASSESTS/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import facebook from '../../ASSESTS/fb.png';
import twitter from '../../ASSESTS/twiiter.png';
import instgram from '../../ASSESTS/insta.png';
import linked from '../../ASSESTS/linked.png'; 

const Footer = ()=>{
       return(
<footer>
<div className="container">
    <div className="row">
        <div className="col-md-3 col-sm-6">
        <img src={footerlogo} className="footerlogo" />
        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.
Con</p>
<div className="footer-contact">
    <div className="footer-icon">
    <FontAwesomeIcon icon={faPhone}/>
    </div>
</div>
<div className="footer-text">
    <h6>Contact us</h6>
    <h4>+011234567890</h4>
</div>
        </div>
        <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="/Booking">Booking</a></li>
                <li><a href="#">Faqs</a></li>
                <li><a href="/OurTeam">Our team </a></li>
                <li><a href="#">Services</a></li>
                


            </ul>
        </div>
        <div className="col-md-3 col-sm-6">
        <h2>Our Services</h2>
            <ul>
                <li><a href="#">Dental care</a></li>
                <li><a href="#">Cardiac Clinic</a></li>
                <li><a href="#">Massege Therapy </a></li>
                <li><a href="#">Cardiology</a></li>
                <li><a href="#">Precise Diagnosis</a></li>
                <li><a href="#">Our team </a></li>
                <li><a href="#">Abmbulance Services</a></li>
                


            </ul>
        </div>
        <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form> 
                <input type="email" placeholder="enter email"/>
                <button type ="submit">Subscribe now</button>
            </form>
            <ul className="social">
           <li><a href="#"><img src={facebook} /></a></li>
           <li><a href="#"><img src={twitter} /></a></li>
           <li><a href="#"><img src={instgram} /></a></li>
           <li><a href="#"><img src={linked } /></a></li>



            </ul>
        </div>
    </div>
</div>

<div className="footer-bottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-12-col-md-12"> 
            <span>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </span>
                <span>Copyright © 2022 Design & Developed by ThemeTrades </span>
            </div>
        </div>
    </div>
</div>



</footer>




       )






}




export default Footer;






