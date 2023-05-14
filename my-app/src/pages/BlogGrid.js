/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Banner from "../components/Banner/Banner";
import './BlogGrid.css'

import doc2 from '../ASSESTS/doc2.jpeg'
import doc3 from '../ASSESTS/doc3.jpeg'
import doc4 from '../ASSESTS/doc4.jpeg'
import doc5 from '../ASSESTS/doc5.jpeg'
import doc6 from '../ASSESTS/doc6.jpeg'
import doc7 from '../ASSESTS/doc7.jpeg'
import doc8 from '../ASSESTS/doc8.jpg'

import pic1 from '../ASSESTS/BlogGrid/pic1.jpg'
import pic2 from '../ASSESTS/BlogGrid/pic2.jpg'
import pic3 from '../ASSESTS/BlogGrid/pic3.jpg'
import pic4 from '../ASSESTS/BlogGrid/pic4.jpg'
import pic5 from '../ASSESTS/BlogGrid/pic5.jpg'
import pic6 from '../ASSESTS/BlogGrid/pic6.jpg'
import pic7 from '../ASSESTS/BlogGrid/pic7.jpg'
import pic8 from '../ASSESTS/BlogGrid/pic8.jpg'
import pic9 from '../ASSESTS/BlogGrid/pic9.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarDays } from "@fortawesome/free-solid-svg-icons";


const BlogGrid  =()=>{
    return(
        <>

       <Banner title="Blog Grid 3 " smtitle="Blog Grid 3"/>
                   <section className="section-area section-sp1">
                     <div className="container">
                       <div className="row">
                         <div className="col-xl-4 col-md-6">
                           <div className="blog-card mb-30">
                            <div className="post-media">
                             <a href="/BlogDetails">
                             <img src={pic1}/>
                               </a></div>
                                <div className="post-info">
                                 <ul className="post-meta">
                                  
                                   <li className="author">
                                    <a href="/BlogDetails">
                                    
                                    <img src={doc2}/>Kalina
                                    </a>
                                    </li>
                                     <li className="date">
                                     <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} /></li></ul>
                                        <h4 className="post-title">
                                         <a href="/BlogDetails">Dental Care for Women is very important</a>
                                          </h4>
                                           <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More    </a>
                                            
                                            </div></div></div>
                                             <div className="col-xl-4 col-md-6">
                                             <div className="blog-card mb-30">
                                              <div className="post-media">
                                              <a href="/BlogDetails">
                                              <img src={pic2}/></a>
                                               
                                               </div><div className="post-info">
                                                <ul className="post-meta">
                                                 
                                                 <li className="author">
                                                  <a href="/BlogDetails">
                                                  
                                                  <img src={doc3}/>Michel</a>
                                                  </li>
                                                  <li className="date">
                                                  <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} /> 20 July 2021</li>
                                                   </ul>
                                                   <h4 className="post-title">
                                                    <a href="/BlogDetails">In this hospital there are special surgeon</a>
                                                     </h4>
                                                      <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                      </a></div></div></div>
                                                      <div className="col-xl-4 col-md-6">
                                                      <div className="blog-card mb-30">
                                                      <div className="post-media">
                                                       <a href="/BlogDetails">
                                                       
                                                       <img src={pic3}/>
                                                       
                                                       </a></div>
                                                       <div className="post-info">
                                                        <ul className="post-meta">
                                                         <li className="author">
                                                          <a href="/BlogDetails">
                                                          <img src={doc4}/>Sonar Moyna</a>
                                                           </li>
                                                            <li className="date">
                                                            <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} /> 
                                                               19 July 2021</li></ul>
                                                               <h4 className="post-title">
                                                                <a href="/BlogDetails">Why Is Skin Surgeon Considered Underrated</a>
                                                                 </h4><a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                                 </a></div></div></div>
                                                                 
                                                                 <div className="col-xl-4 col-md-6">
                                                                  <div className="blog-card mb-30">
                                                                   <div className="post-media">
                                                                     <a href="/BlogDetails">
                                                                     <img src={pic4}/>
                                                                     </a>
                                                                        </div>
                                                                        <div className="post-info">
                                                                         <ul className="post-meta">
                                                                          <li className="author">
                                                                           <a href="/BlogDetails">
                                                                           
                                                                           <img src={doc5}/>Peter Packer</a>
                                                                           </li>
                                                                            <li className="date">
                                                                            <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  18 July 2021</li>
                                                                              </ul>
                                                                               <h4 className="post-title"><a href="/BlogDetails">Understand Health Before You Regret</a>
                                                                                </h4>
                                                                                 <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                                                  
                                                                                  </a></div></div></div>
                                                                                   <div className="col-xl-4 col-md-6">
                                                                                   <div className="blog-card mb-30">
                                                                                    <div className="post-media"><a href="/BlogDetails">
                                                                                    <img src={pic5}/></a>
                                                                                   </div>
                                                                                    <div className="post-info">
                                                                                     <ul className="post-meta">
                                                                                      <li className="author">
                                                                                       <a href="/BlogDetails">
                                                                                       <img src={doc6}/>Kalina</a>
                                                                                        </li>
                                                                                        <li className="date">
                                                                                        <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  17 July 2021</li>
                                                                                        </ul>
                                                                                        <h4 className="post-title">
                                                                                        <a href="/BlogDetails">Health Will Be A Thing Of The Past And Here</a>
                                                                                        </h4>
                                                                                        <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More </a>
                                                                                        </div></div></div>
                                                                                        <div className="col-xl-4 col-md-6">
                                                                                         <div className="blog-card mb-30">
                                                                                          <div className="post-media">
                                                                                           <a href="/BlogDetails">
                                                                                           <img src={pic6}/></a></div>
                                                                                        <div className="post-info">
                                                                                         <ul className="post-meta">
                                                                                          <li className="author">
                                                                                           <a href="/BlogDetails">
                                                                                           <img src={doc7}/>Michel</a>
                                                                                            </li>
                                                                                            <li className="date">
                                                                                            <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  16 July 2021</li>
                                                                                              </ul>
                                                                                              <h4 className="post-title">
                                                                                               <a href="/BlogDetails">Can you get a diflucan prescription online?</a></h4>
                                                                                               <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                                                               </a></div></div></div>
                                                                                               <div className="col-xl-4 col-md-6">
                                                                                               <div className="blog-card mb-30">
                                                                                               <div className="post-media">
                                                                                               <a href="/BlogDetails">
                                                                                               <img src={pic7} />  

                                                                                               </a></div>
                                                                                               <div className="post-info">
                                                                                               <ul className="post-meta">
                                                                                               <li className="author">
                                                                                               <a href="/BlogDetails">
                                                                                               
                                                                                               <img src={doc8}/> John deo</a>
                                                                                               </li>
                                                                                               <li className="date">
                                                                                               <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  15 July 2021</li></ul>
                                                                                                
                                                                                                <h4 className="post-title">
                                                                                                <a href="/BlogDetails">Ten Gigantic Influences Of Health</a></h4>
                                                                                                <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More </a>
                                                                                                </div></div></div>
                                                                                                <div className="col-xl-4 col-md-6">
                                                                                                <div className="blog-card mb-30">
                                                                                                 <div className="post-media">
                                                                                                  <a href="/BlogDetails">
                                                                                                  <img src={pic8}/>
                                                                                                  </a></div>
                                                                                                  <div className="post-info">
                                                                                                   <ul className="post-meta">
                                                                                                    <li className="author">
                                                                                                     <a href="/BlogDetails">
                                                                                                     <img src={doc4}/> Peter Packer</a></li>
                                                                                                      <li className="date">
                                                                                                      <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  14 July 2021</li></ul>
                                                                                                        <h4 className="post-title">
                                                                                                         <a href="/BlogDetails">Why Is Skin Surgeon Considered Underrated</a></h4>
                                                                                                          <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                                                                          </a></div></div></div>
                                                                                                           <div className="col-xl-4 col-md-6">
                                                                                                            <div className="blog-card mb-30">
                                                                                                             <div className="post-media">
                                                                                                              <a href="/BlogDetails">
                                                                                                              <img src={pic9}/></a>
                                                                                                                </div>
                                                                                                                <div className="post-info">
                                                                                                                <ul className="post-meta">
                                                                                                                <li className="author">
                                                                                                                <a href="/BlogDetails">
                                                                                                                <img src={doc3}/> Sonar Moyna</a>
                                                                                                                 </li>
                                                                                                                  <li className="date">
                                                                                                                  <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />  13 July 2021</li>
                                                                                                                   </ul>
                                                                                                                    <h4 className="post-title">
                                                                                                                     <a href="/BlogDetails">Everyone need to go Dentist regularly</a>
                                                                                                                     </h4>
                                                                                                                     <a className="btn btn-outline-primary btn-sm" href="/BlogDetails">Read More 
                                                                                     </a></div></div></div></div>


                                                                                     <div className="row">
                                                                                     <div className="col-lg-12">
                                                                              
                                                                                      <div className="pagination-bx text-center mb-30 ">
                                                                                     
                                                                                      <ul className="pagination">
                                                                                      <li className="previous">
                                                                                      <a href="/BlogGrid">Prev</a>
                                                                                      </li>
                                                                                      <li className="active">
                                                                                      <a href="/BlogGrid">1</a>
                                                                                      </li><li>
                                                                                      <a href="/BlogGrid">2</a>
                                                                                      </li><li>
                                                                                      <a href="/BlogGrid">3</a>
                                                                                      </li>
                                                                                      <li className="next">
                                                                                      <a href="/BlogGrid">Next</a>
                                                                                     </li></ul></div></div></div>
                                                         
                                                                   </div></section>
       
          

        </>
    )
}

export default BlogGrid ;