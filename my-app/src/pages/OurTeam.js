/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import Banner from "../components/Banner/Banner";
import doc4 from '../ASSESTS/doc4.jpeg'
import doc5 from '../ASSESTS/doc5.jpeg'
import doc6 from '../ASSESTS/doc6.jpeg'
import img1 from '../ASSESTS/about-img/img1.jpg'
import img2 from '../ASSESTS/about-img/img2.jpg'
import img3 from '../ASSESTS/about-img/img3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialIcon } from 'react-social-icons';
import './OurTeam.css'


  const OurTeam = ()=>{
    return(

        <>
        <Banner title="Our Team" smtitle="our team"/>
        <section className="ourteam">
        <div className="container">
            <div className="row">

                <div className="ourteam">
                <div className="team-member tm-30">
                    <div className="team-media">
                        <img src={doc6}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. Addition Smith</h4>
                            <span className ="text-title">Dentist</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>

             
             <div className="ourteam">
                <div className="team-member mb-30">
                    <div className="team-media">
                        <img src={doc4}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. Mahfuz Ahmed</h4>
                            <span className ="text-title">Chiropractor</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{  height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>

             
             <div className="ourteam">
                <div className="team-member mb-30">
                    <div className="team-media">
                        <img src={doc5}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. David Benjamin</h4>
                            <span className ="text-title">Chiropractor</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>

             

             
             <div className="ourteam">
                <div className="team-member mb-30">
                    <div className="team-media">
                        <img src={img3}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. Addition Smith</h4>
                            <span className ="text-title">Dentist</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>

             
             <div className="ourteam">
                <div className="team-member mb-30">
                    <div className="team-media">
                        <img src={img2}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. Mahfuz Ahmed</h4>
                            <span className ="text-title">Chiropractor</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>

             
             <div className="ourteam">
                <div className="team-member mb-30">
                    <div className="team-media">
                        <img src={img1}/>
                        <div className="team-info">
                            <h4 className="team-title">Dr. David Benjamin</h4>
                            <span className ="text-title">Chiropractor</span> 
                            <ul className="social-media mb-0">
                             <li> <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                             <li> <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                            <li> <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 50, width: 50 }}/> </li>
                           </ul> 
                    </div>
                </div>
             </div>
             </div>
            
             </div>
            </div>
           
        </section>
        </>
    )
  }

  export default OurTeam ;