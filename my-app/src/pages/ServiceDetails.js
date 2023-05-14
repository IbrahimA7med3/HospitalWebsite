import React , {useState} from "react";
import './ServiceDetails.css'
import Banner from "../components/Banner/Banner";
import picc from '../ASSESTS/picc.jpg'
import download1 from '../ASSESTS/download1.png'
import download2 from '../ASSESTS/download2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAngleRight ,faCheck ,faAngleDown} from '@fortawesome/free-solid-svg-icons';

const ServicesDetails =()=>{
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
    return(
        <>
        <Banner title="Services Details" smtitle="Services Details"/>
         
         <section class="section-area section-sp1">
         <div class="container">
         <div class="row">
         <div class="col-lg-8 mb-30">
         <div class="ttr-media mb-30">
         <img src={picc} class="rounded" alt=""/> 
         </div>
         <div class="clearfix">
         <div class="head-text mb-30">
         <h2 class="title mb-15">Why Medical Had Been So Popular Till</h2>
         <p class="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         </div>
         <div class="row align-items-center">
         <div class="col-md-6 mb-30">
         <ul class="list-check-squer mb-0">
         <li ><FontAwesomeIcon className="bd  tt" icon={faCheck} />Then along come two they</li>
         <li> <FontAwesomeIcon  className="bd" icon={faCheck} /> That’s just a little bit more than</li>
         <li> <FontAwesomeIcon className="bd" icon={faCheck} /> Standard dummy text ever since</li>
         <li> <FontAwesomeIcon className="bd" icon={faCheck} /> Simply dummy text of the printing</li>
         <li> <FontAwesomeIcon className="bd" cl icon={faCheck} /> Make a type specimen book</li>
         </ul>
         </div>
         <div class="col-md-6 mb-30">
         <div class="skillbar-box mb-30">
         <h6 class="title">Advanced Technology</h6>
         <div class="skillbar appear">
         <p class="skillbar-bar skillbar-bar1" ></p>
         <span class="skill-bar-percent">96%</span>
         </div>
         </div>
         <div class="skillbar-box mb-30">
         <h6 class="title">Certified Engineers</h6>
         <div class="skillbar appear">
         <p class="skillbar-bar skillbar-bar2"></p>
      
         <span class="skill-bar-percent">79%</span>
         </div>
         </div>
         <div class="skillbar-box mb-0">
         <h6 class="title">6 years Experience</h6>
         <div class="skillbar appear">
         <p class="skillbar-bar skillbar-bar3" ></p>
         <span class="skill-bar-percent">75%</span>
         </div></div></div></div></div>
         <div class="clearfix">
         <div class="head-text mb-30">
         <h4 class="title mb-10">Popular Questions</h4>
         <p class="mb-0">Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
         </div>
         
         <div class="accordion ttr-accordion1 accordion">
         <div class="accordion-item">
         
         <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow1(!show1)}>
                  How Doctor Can Ease Your Pain? 
                </button> <FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show1 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>

            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow2(!show2)}>
                How do I withdraw from a subject? 
                </button><FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show2 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>

            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow3(!show3)}>
                Understand Doctor Before You Regret ? 
                </button><FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show3 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>

            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow4(!show4)}>
                What types of systems do you support? 
                </button> <FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show4 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>

            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow5(!show5)}>
                We Teach You How To Feel Better? 
                </button> <FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show5 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p> }
                
              </div>
            </div>

            <div className="show">
              <div className="show-sc">
                <button className="btn-show" type="button" onClick={() => setShow6(!show6)}>
                How Can I Contact You? 
                </button><FontAwesomeIcon className="down" icon={faAngleDown}/>
                {show6 && <p className="btn-tex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>}
              </div>
            </div>
          
          
           </div>
        
               
               
                
               
                </div>
                </div>
                </div>
                <div class="col-lg-4">
                <aside class="sticky-top pb-1">
                <div class="widget">
                <ul class="service-menu">
                <li class="active">

                <a href="ServicesDetails">
                <span>Engine Diagnostics</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a></li><li>

                <a href="ServicesDetails">
                <span>Lube Oil and Filters</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a></li><li>

                <a href="ServicesDetails">
                <span>Belts and Hoses</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a></li><li>
                <a href="ServicesDetails">
                <span>Air Conditioning</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a></li><li>
                <a href="ServicesDetails">
                <span>Brake Repair</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a></li><li>
                <a href="ServicesDetails">
                <span>Tire and Wheel Services</span>
                <i > <FontAwesomeIcon icon={faAngleRight} /></i>
                </a>
                </li></ul></div>
                <div class="widget">
                <div class="brochure-bx">
                <h5 class="title-head">Download</h5>
                <a class="download-link" href="/ServicesDetails">
                <img src={download1} class="rounded" alt=""/> 
                <h5 class="title">Download our Brochures</h5>
                <span>Download</span>
                </a>
                <a class="download-link" href="/ServicesDetails">
             
             <img src={download2} class="rounded" alt=""/>
             <h5 class="title">Our Company Details</h5>
             <span>Download</span>
             </a></div></div></aside></div></div></div></section>

             
 
  

  

  
      
            


         </>
    )}


    export default ServicesDetails;