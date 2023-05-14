/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import './Faqs.css';
import Banner from './../components/Banner/Banner';

import pic0 from '../ASSESTS/pic0.jpg'
import doc3 from '../ASSESTS/doc3.jpeg'
import doc7 from '../ASSESTS/doc7.jpeg'
import pic04 from '../ASSESTS/pic04.jpg'
import download4 from '../ASSESTS/about-img/download4.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Faqs = () => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);

  // Add more show and setShow variables for other buttons as needed

  return (
    <>
      <Banner title="Faq's" smtitle="Faq's" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow1(!show1)}>
                  How Doctor Can Ease Your Pain? 
                </button> 
                {show1 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow2(!show2)}>
                How do I withdraw from a subject?
                </button> 
                {show2 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow3(!show3)}>
                Understand Doctor Before You Regret?
                </button> 
                {show3 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>
          
          {/* Add more buttons and corresponding show and setShow variables as needed */}
          
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow4(!show4)}>
                What types of systems do you support?
                </button> 
                {show4 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow5(!show5)}>
                We Teach You How To Feel Better?
                </button> 
                {show5 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow6(!show6)}>
                How Can I Contact You?
                </button>
                {show6 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>

          
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow7(!show7)}>
                How do I withdraw from a subject?
                </button>
                {show7 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow8(!show8)}>
                What’s a payment statement?
                </button> 
                {show8 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow9(!show9)}>
                How Can I Contact You?
                </button> 
                {show9 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow10(!show10)}>
                How Doctor Can Ease Your Pain?
                </button> 
                {show10 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <section className="section-sp">
                                  <div className="container">
                                 
                               
                                  <div className="heading-bx text-center">
                                    <h6 className="title-ext ">Latest News</h6>
                                    <h2 className="title-dt">Our Latest News</h2>
                                  </div>

                                  
                         
                                  <div className="slick-track" >
                                  
                                  <div className="row justify-content-center">
                                    <div className="col-lg-4 col-sm-6 mb-30">
                                      <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" >
                                     <div>
                                            <div className="slider-item-dt" >
                                             <div className="blog-card">
                                              <div className="post-media">
                                                  <a href="/BlogDetails">
                                                   <img  className="about-img" src={pic0}/>
                                  
                                                   </a> 
                                   </div>

                                       <div className="post-info">
                                          <ul className="post-meta">
                                             <li className="author">
                                              <a href="/BlogDetails">
                                                  <img  className="about-img" src={doc7}/> John deo
                                                  
                                                  </a></li>
                                  
                                               <li className="date">
                                               <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />
                                                    17 July 2021</li>
                                                  </ul>

                                           <h5 className="post-title">
                                                <a href="/BlogDetails">In this hospital there are <br/>special surgeon</a>                             
                                            </h5>

                                               <a className="btn-sm" href="/BlogDetails">Read More 
                                               <FontAwesomeIcon className=" btn-icon-sm" icon={faChevronRight} />
                                               </a>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                  
                                  

                                  
                                  <div className="slick-track" >
                                     <div className="row justify-content-center">
                                      <div className="col-lg-4 col-sm-6 mb-30">
                             
                                        <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" >
                                         <div>
                                          <div className="slider-item-dt" >
                                            <div className="blog-card">

                                                  <div className="post-media">
                                                    <a href="/BlogDetails">
                                                    <img  className="about-img" src={pic04}/>                     
                                                       </a> 
                                   </div>

                                  <div className="post-info">
                                    <ul className="post-meta">
                                        <li className="author">
                                          <a href="/BlogDetails">
                                  
                                  <img  className="about-img" src={doc3}/> Peter Packer
                                    </a>
                                  </li>

                                  <li className="date">
                                  <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />

                                 17 July 2021</li>

                                  </ul>

                                  <h5 className="post-title">
                                   <a href="/BlogDetails">In this hospital there are <br/>special surgeon</a>
                              
                                  </h5>

                                  <a class="btn-sm" href="/BlogDetails">Read More 
                                  <FontAwesomeIcon className=" btn-icon-sm" icon={faChevronRight} /></a>
                                  
                                  
                                     </div>
                                     </div>
                                     </div>
                                    </div>
                                  </div>
                                  

                                          </div>
                                         </div>
                                       </div>
                                    </div>
                                   </div>

                                  </div>
                                  <div className="about-pt">
                
                 <img  className="pt-6" src={download4}/>
                 </div>
         
                 
                                  </section>



  
    </>
  );
}

export default Faqs;