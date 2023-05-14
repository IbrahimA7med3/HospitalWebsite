/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import Banner from "../components/Banner/Banner"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,  faGlobe, faMapLocationDot, } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';
import './Contact.css'

import iconimg from '../ASSESTS/download.png'
import iconimg1 from '../ASSESTS/download-1.png'
import iconimg2 from '../ASSESTS/download-2.png'

const Contact = ()=>{
    return(

        <>
            <Banner title="Contact" smtitle="contact"/>

            <section className="">
                    <div className="container">
                     <div className="contact-wraper">
                      <div className="row">
                       <div className="col-lg-6 mb-30">
                          <form className="form-wraper contact-form ajax-form">
                           <div className="ajax-message">
    
                       </div> 
                       <div className="row">
                       <div className="form-group col-md-12">
                         <input name="name" type="text" required="" className="form-control" placeholder="Your Name"/>
                       </div> 
                    
                      <div className="form-group col-md-12">
                         <input name="email" type="email" required="" className="form-control" placeholder="Email"/>
                      </div>

                      <div className="form-group col-md-12">
                         <input name="phone" type="text" required="" className="form-control" placeholder="Phone Numbers"/>
                      </div>
                      
                      <div className="form-group col-md-12">
                        <select className="form-select form-control">
                        <option>Selecty Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    
                    <div className="form-group col-md-12">
                      <textarea name="message" required="" className="form-control" placeholder="Type Message">
                     </textarea>
                    </div>
                     <div className="col-lg-12">
                      <button >Submit</button>
              </div></div>
              </form>

            </div>


           <div className="col-lg-6 col-md-6">
                    <div className="side">
                        <div className="overlay">
                            <h3>contact Us For Any Informations</h3>
                            <li><FontAwesomeIcon icon={faMapLocationDot}/> Location</li>
                       <hr/>
                       <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p><br/>
                       <li><FontAwesomeIcon icon={faEnvelope}/> Email & Phone</li>
                      <hr/> 
                      <p>ibrahimahmed3055@gmail.com</p>
                      <p>01134273957</p>
                   <li><FontAwesomeIcon icon={faGlobe}/> Follow Us</li>
                   <ul  >

                   <li><SocialIcon  className="icon-con" url="https://twitter.com/jaketrent" bgColor="none"  fgColor="#5559CE" style={{ bottom: 10, right: 10, height: 60, width: 60}}/>
                 </li>
                   <li><SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="#5559CE" style={{ bottom: 10, right: 10,height: 60, width: 60}}/>
                 </li>
                   <li><SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="#5559CE" style={{ bottom: 10, right: 10,height: 60, width: 60}}/>
                 </li>
                   </ul>
                    </div>
                    </div>
                    </div>
             </div></div></div>
             </section>



            <section className="cards" id="Contact" >
               <div className="content">
                <div className="card-f1">

                  <div className="icon-img">
                    <img src={iconimg2}/>
                    </div>

                     <div className="info">
                        <h5 className="ttr-title">Contact Number</h5>
                        <p>+20 101 694 5641</p>
                        <p>+20 114 327 3957</p>
                     </div>
                   </div>

                   <div className="card-f2">
                     <div className="icon-img">
                       <img src={iconimg}/>
                   </div>

                      <div className="info">
                          <h5 className="ttr-title"> Email Address</h5>
                          <p>info@yourdomain.com</p>
                          <p>example@support.com</p>
                     </div>
                  </div>


                     <div className="card-f3">
                       <div className="icon-img">
                         <img src={iconimg1}/>
                     </div>

                     <div className="info">
                       <h5 className="ttr-title">Address</h5>
                       <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    </div>
                       </div>
                     </div>
              </section>

          
        </>
    )
}

export default Contact;