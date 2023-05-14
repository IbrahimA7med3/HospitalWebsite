/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Banner from "../components/Banner/Banner";
import './About.css'
import doc8 from '../ASSESTS/doc8.jpg'
import pic5 from '../ASSESTS/pic5.jpg'
import pic0 from '../ASSESTS/pic0.jpg'
import doc6 from '../ASSESTS/doc6.jpeg'
import doc3 from '../ASSESTS/doc3.jpeg'
import doc5 from '../ASSESTS/doc5.jpeg'
import doc4 from '../ASSESTS/doc4.jpeg'
import doc2 from '../ASSESTS/doc2.jpeg'
import doc7 from '../ASSESTS/doc7.jpeg'
import pic3 from '../ASSESTS/pic3.jpg'
import pic04 from '../ASSESTS/pic04.jpg'
import img1 from '../ASSESTS/about-img/img1.jpg'
import img2 from '../ASSESTS/about-img/img2.jpg'
import img3 from '../ASSESTS/about-img/img3.jpg'
import download from '../ASSESTS/about-img/download.png'
import download2 from '../ASSESTS/about-img/download2.png'
import download1 from '../ASSESTS/about-img/download1.png'
import download6 from '../ASSESTS/about-img/download6.png'
import download4 from '../ASSESTS/about-img/download4.png'
import download5 from '../ASSESTS/about-img/download5.png'
import download3 from '../ASSESTS/about-img/download3.png'
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faCalendarDays, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const About = ()=>{
    return(

        <>
            <Banner title="About Us" smtitle="about"/>
            <section className="About-us">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-30">
                    <div className="about-area">
                 <ul>
                   <li>
              
                    <img  className="about-thumb1" src={pic3}/>
                   </li>

                   <li>
                   <img  className="about-thumb2" src={doc8}/>
                   </li>

                   <li>
                   <img  className="about-thumb3" src={pic5}/>
                   </li>
                       <li>
                   <div className="exp-bx">
                    20<span>Year Exprience</span>
                   </div>
                   </li>
                 </ul>
                

                    </div>
            </div>
            


            <div className="col-lg-6 mb-30">
                <div className="heading-bx">
                    <h6 className="title-ext">About Us</h6>
                    <h2 className="title">The Great Place Of Medical Hospital Center</h2>
                    <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
                </div>


                <div className="row">
                    <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                        <div className="feature-container feature-bx1 feature1">
                            <div className="icon-md">
                              <span className="icon-cell">
                               <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
                               <path d="m509.82 327.343-21.991-27.599c-1.896-2.381-4.775-3.768-7.82-3.768h-7.712l-74.353-93.385c-1.897-2.383-4.777-3.771-7.823-3.771h-22.862v-22.765c0-19.014-15.43-34.483-34.396-34.483h-97.678v-4.552c0-28.428-23.127-51.555-51.555-51.555s-51.555 23.127-51.555 51.555v4.552h-97.678c-18.966 0-34.397 15.47-34.397 34.484v251.241c0 5.523 4.478 10 10 10h22.279c4.628 22.794 24.758 39.999 48.815 39.999s44.186-17.205 48.814-39.999h250.37c4.628 22.794 24.757 39.999 48.814 39.999s44.187-17.205 48.815-39.999h24.093c5.522 0 10-4.477 10-10v-93.722c0-2.264-.769-4.461-2.18-6.232zm-124.52-108.523 61.432 77.156h-79.474v-77.156zm-233.226-81.799c0-17.399 14.155-31.555 31.555-31.555s31.555 14.156 31.555 31.555v4.552h-63.109v-4.552zm-132.074 39.035c0-7.986 6.459-14.483 14.397-14.483h298.464c7.938 0 14.396 6.497 14.396 14.483v241.241h-217.35c-4.628-22.794-24.757-39.999-48.814-39.999s-44.187 17.205-48.815 39.999h-12.278zm61.094 281.24c-16.44 0-29.816-13.458-29.816-29.999s13.376-29.999 29.816-29.999 29.815 13.458 29.815 29.999-13.375 29.999-29.815 29.999zm347.998 0c-16.44 0-29.815-13.458-29.815-29.999s13.375-29.999 29.815-29.999 29.816 13.458 29.816 29.999-13.376 29.999-29.816 29.999zm62.908-39.999h-14.093c-4.628-22.794-24.758-39.999-48.815-39.999s-44.186 17.205-48.814 39.999h-13.02v-101.321h107.932l16.81 21.096z"></path>
                               <path d="m183.629 66.808c5.522 0 10-4.477 10-10v-12.104c0-5.523-4.478-10-10-10s-10 4.477-10 10v12.104c0 5.523 4.477 10 10 10z"></path>
                               <path d="m236.764 94.969c1.934 1.829 4.404 2.736 6.871 2.736 2.652 0 5.299-1.048 7.266-3.127l10.626-11.229c3.796-4.011 3.621-10.341-.391-14.137s-10.341-3.621-14.137.391l-10.626 11.229c-3.796 4.012-3.621 10.341.391 14.137z"></path>
                               <path d="m116.358 94.579c1.967 2.078 4.613 3.126 7.266 3.126 2.467 0 4.938-.907 6.871-2.737 4.012-3.796 4.187-10.125.391-14.137l-10.627-11.229c-3.796-4.011-10.126-4.187-14.137-.39-4.012 3.796-4.187 10.125-.391 14.137z">
                               </path><path d="m90.896 216.592h184.372v113.287h-184.372z" fill="#b2f0fb">
                               </path>
                               </svg></span>
                               </div>

                            <div className="icon-content">
                            <h4 className="ttr-title">Emergency Help</h4>
                            </div>
                           </div>
                        
                    </div>
                            <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                              <div className="feature-container feature-bx1 feature2">
                              <div className="icon-md">
                               <span className="icon-cell">
                                <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg"><path d="m351.524 124.49h-37.907v-37.907h-44.657v37.907h-37.906v44.657h37.906v37.907h44.657v-37.907h37.907z" fill="#a4fcc4"></path>
                                 <path d="m291.289 279.415c73.114 0 132.597-59.482 132.597-132.597s-59.483-132.596-132.597-132.596-132.598 59.482-132.598 132.596 59.484 132.597 132.598 132.597zm0-245.193c62.086 0 112.597 50.511 112.597 112.597s-50.511 112.597-112.597 112.597c-62.087 0-112.598-50.511-112.598-112.597s50.511-112.597 112.598-112.597z"></path><path d="m502 267.736c-32.668 0-59.245 26.577-59.245 59.245v13.605h-240.266v-19.048c0-23.625-19.221-42.846-42.846-42.846h-90.398v-17.584c0-32.668-26.577-59.245-59.245-59.245-5.522 0-10 4.478-10 10v275.914c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-39.327h373.51v39.327c0 5.522 4.478 10 10 10h49.245c5.522 0 10-4.478 10-10v-210.041c0-5.522-4.478-10-10-10zm-342.356 30.957c12.598 0 22.846 10.249 22.846 22.846v19.048h-113.245v-41.894zm-110.399 179.085h-29.245v-254.623c16.812 4.434 29.245 19.77 29.245 37.954zm20-49.327v-67.864h373.51v67.864zm422.755 49.327h-29.245v-150.797c0-18.185 12.434-33.521 29.245-37.954z"></path></svg></span></div><div class="icon-content">
                                 <h4 className="ttr-title">Qualified Doctors</h4>
                                   </div>
                                  </div>
                                 </div>

                              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                               <div className="feature-container feature-bx1 feature3">
                                <div className="icon-md">
                                 <span className="icon-cell">
                                   <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg"><path d="m397.886 191.161c-3.545-4.235-9.852-4.797-14.087-1.252-4.235 3.544-4.797 9.851-1.253 14.086 26.684 31.893 41.165 72.339 40.775 113.888-.886 94.681-79.215 172.782-174.608 174.1-48.125.666-93.326-17.479-127.401-51.087-33.708-33.246-52.272-77.526-52.272-124.685 0-59.98 30.361-115.236 81.216-147.809 51.27-32.838 79.187-66.186 93.348-111.507l2.581-8.26 2.58 8.257c9.333 29.869 25.53 55.364 49.516 77.939 4.02 3.786 10.35 3.593 14.136-.428 3.785-4.021 3.594-10.351-.429-14.136-21.713-20.438-35.736-42.471-44.133-69.341l-12.125-38.802c-1.305-4.175-5.171-7.018-9.545-7.018s-8.24 2.843-9.545 7.018l-12.126 38.807c-12.639 40.45-38.072 70.545-85.045 100.63-56.624 36.268-90.429 97.819-90.429 164.65 0 52.553 20.679 101.891 58.228 138.924 37.248 36.736 86.47 56.867 138.888 56.865.941 0 1.891-.006 2.833-.02 51.527-.712 100.087-21.236 136.733-57.792 36.664-36.573 57.12-84.914 57.6-136.118.432-46.301-15.704-91.371-45.436-126.909z"></path><path d="m279.576 280.012v-29.712c0-5.523-4.478-10-10-10h-46.783c-5.522 0-10 4.477-10 10v29.712h-29.711c-5.522 0-10 4.477-10 10v46.783c0 5.523 4.478 10 10 10h29.711v29.711c0 5.523 4.478 10 10 10h46.783c5.522 0 10-4.477 10-10v-29.711h29.712c5.522 0 10-4.477 10-10v-46.783c0-5.523-4.478-10-10-10zm19.712 46.783h-29.712c-5.522 0-10 4.477-10 10v29.711h-26.783v-29.711c0-5.523-4.478-10-10-10h-29.711v-26.783h29.711c5.522 0 10-4.477 10-10v-29.712h26.783v29.712c0 5.523 4.478 10 10 10h29.712z"></path><path d="m369.497 246.666c51.239-.708 92.983-42.352 93.459-93.223.313-33.486-16.989-62.983-43.266-79.911-21.598-13.914-37.772-29.46-45.4-53.873l-6.143-19.659-6.143 19.661c-7.603 24.331-23.627 39.927-45.19 53.738-26.16 16.756-43.48 45.945-43.48 79.151 0 52.43 43.18 94.848 96.163 94.116z" fill="#ffbdbc"></path></svg></span></div><div class="icon-content"><h4 class="ttr-title">Best Professionals</h4></div></div></div>
                     
                              <div className="col-lg-6 col-sm-6 mb-30 mb-sm-20">
                                   <div className="feature-container feature-bx1 feature4">
                                   <div className="icon-md">
                                   <span className="icon-cell">
                                   <svg enable-background="new 0 0 512 512" height="85" viewBox="0 0 512 512" width="85" xmlns="http://www.w3.org/2000/svg">
                                   <path d="m181.049 229.112-76.87 76.971c-14.045 14.07-14.045 36.883 0 50.953l50.881 50.974c14.045 14.07 36.815 14.07 50.86 0l178.611-178.899h-203.482z" fill="#e2c4ff"></path><path d="m495.277 81.339c-10.57-10.578-24.625-16.403-39.574-16.403-3.325 0-6.605.288-9.813.853 3.065-17.397-2.103-35.975-15.505-49.387-10.57-10.577-24.624-16.402-39.574-16.402s-29.003 5.825-39.573 16.402c-21.816 21.83-21.816 57.352 0 79.182 2.71 2.712 5.648 5.111 8.772 7.18l-18.689 18.716-52.105-52.184c-3.902-3.907-10.233-3.912-14.142-.012-3.908 3.902-3.914 10.234-.011 14.143l18.64 18.67-196.602 196.922c-17.56 17.593-17.902 46.002-1.029 64.017l-16.422 16.452c-3.896 3.903-3.896 10.226 0 14.129l12.383 12.406-88.75 88.913c-3.901 3.909-3.896 10.24.013 14.142 1.953 1.948 4.509 2.922 7.065 2.922 2.562 0 5.125-.979 7.078-2.936l88.724-88.887 12.357 12.38c1.876 1.88 4.422 2.936 7.078 2.936s5.202-1.056 7.078-2.936l16.396-16.426c8.547 8.028 19.644 12.432 31.418 12.432 12.28 0 23.825-4.79 32.506-13.487l196.588-196.91 18.617 18.648c1.953 1.956 4.515 2.935 7.077 2.935 2.557 0 5.113-.975 7.065-2.923 3.908-3.902 3.914-10.234.011-14.143l-52.155-52.24 18.732-18.758c2.054 3.126 4.453 6.09 7.198 8.836 10.57 10.577 24.624 16.402 39.573 16.402s29.003-5.825 39.574-16.402c21.817-21.831 21.817-57.352.001-79.182zm-129.892-50.8c6.792-6.796 15.822-10.539 25.426-10.539s18.635 3.743 25.427 10.539c13.407 13.416 13.997 34.875 1.773 49.001-.638.583-1.266 1.183-1.881 1.799-.616.617-1.214 1.245-1.795 1.882-6.533 5.671-14.791 8.766-23.524 8.766-9.604 0-18.634-3.743-25.427-10.54-14.025-14.035-14.025-36.873.001-50.908zm-239.787 380.799-24.74-24.786 9.327-9.344 14.287 14.313 10.454 10.473zm73.244-10.392c-4.903 4.912-11.42 7.617-18.352 7.617s-13.449-2.705-18.353-7.617l-50.881-50.975c-10.134-10.152-10.134-26.672-.001-36.823l196.578-196.898 87.616 87.767zm177.227-244.657-20.619-20.654 24.634-24.669c3.498.676 7.086 1.021 10.727 1.021 3.325 0 6.606-.288 9.813-.853-1.189 6.75-1.139 13.678.151 20.413zm105.062-9.905c-6.792 6.796-15.823 10.539-25.427 10.539s-18.635-3.743-25.427-10.539c-13.407-13.416-13.998-34.875-1.773-49.001.638-.583 1.266-1.183 1.881-1.799.617-.617 1.215-1.246 1.797-1.884 6.532-5.67 14.789-8.764 23.521-8.764 9.604 0 18.635 3.743 25.427 10.54 14.026 14.035 14.026 36.873.001 50.908z" fill="#020288"></path>
                                   </svg>
                                   </span>
                                    </div>
                                   
                                   <div className="icon-content">
                                   <h4 className="ttr-title">Medical Treatment</h4>
                                   </div>
                                   </div> 
                                   </div>
                                </div>
               
                                      <a className="btn btn-primary shadow" href="/About">Read More</a>
                 
                                        </div>              
                                      </div>       
                                        </div>

                                        <div className="about-pt">
                 <img  className="pt1" src={download}/>
                 <img  className="pt2" src={download2}/>
                 <img  className="pt3" src={download1}/>
                 </div>


                 <div className="container-sm">
                      <div className="heading-bx text-center">
                      <h6 className="title-ext ">Working Process</h6>
                      <h2 className="title-dt">How we works?</h2>
                    </div>

               <div className="row justify-content-center">
                 <div className="col-lg-4 col-sm-6 mb-30">
                  <div className="work-bx">
                   <div className="work-num-bx">01</div>
                    <div className="work-content">
                      <h5 className="title-bx">Make Appointmnet</h5>
                      <p>It is a long established fact that<br/> a reader will be distracted by <br/>the readable content of.</p>
                      </div>
                      <a className="btn btn-primary light" href="/Booking">View More 
                      <FontAwesomeIcon className=" btn-icon" icon={faAngleRight} /></a>
                      </div>
                      </div>

                      <div className="col-lg-4 col-sm-6 mb-30">
                      <div className="work-bx active">
                      <div className="work-num-bx">02</div>
                        <div className="work-content">
                        <h5 className="title-bx">Take Treatment</h5>
                        <p>It is a long established fact that<br/> a reader will be distracted by <br/>the readable content of.</p>
                        </div>
                        <a className="btn btn-primary light" href="/Services">View More 
                        <FontAwesomeIcon className=" btn-icon" icon={faAngleRight} />
                        </a>

                        </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-30">
                        <div className="work-bx">

                        <div className="work-num-bx">03</div>
                          <div className="work-content">
                           <h5 className="title-bx">Registration</h5><p>It is a long established fact that<br/> a reader will be distracted by <br/>the readable content of.</p></div>
                           <a className="btn btn-primary light" href="/Contact">View More
                           <FontAwesomeIcon className=" btn-icon" icon={faAngleRight} />
                           </a>

                              </div>
                             </div>
                            </div>
                           </div>
                       </section>

                           <section className="section-sp1 service-wraper2">
                           
                           <div className="container">
                           
                           <div className="row">
                           
                           <div className="col-xl-3 col-sm-6 mb-30">
                           
                           <div className="feature-container feature-bx3">
                           
                             <h2 className="counter-text">120</h2>
                              <h5 className="text-tt">Years With You</h5>
                               <p className="text-m">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                            </div>
                           </div>

                             <div class="col-xl-3 col-sm-6 mb-30">
                              <div className="feature-container feature-bx3">
                                <h2 className="counter-text">400</h2>
                                 <h5 className="text-tt">Awards</h5>
                                 <p className="text-m">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                             </div>
                              </div>

                           <div className="col-xl-3 col-sm-6 mb-30">
                             <div className="feature-container feature-bx3">
                              <h2 className="counter-text">250</h2>
                              <h5 className="text-tt">Doctors</h5>
                              <p className="text-m">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                             </div>
                            </div>

                           <div className="col-xl-3 col-sm-6 mb-30">
                             <div className="feature-container feature-bx3">
                              <h2 className="counter-text">800</h2>
                              <h5 className="text-tt">SatisfiedClient</h5>
                              <p className="text-m">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
                               </div>
                              </div>
                             </div>
                            </div>
                           </section>



                         <section className="section-area section-sp3 team-wraper">
                             <div className="container">
                              <div className="heading-bx text-center">
                               <h6 className="title-ext">Our Doctor</h6>
                                 <h2 className="title-dt">Meet Best Doctors</h2>
                             </div>

                               <div className="row justify-content-center">
                                  <div className="col-lg-4 col-sm-6 mb-30">
                                  <div className="team-m">
                                  <div className="team-d">
                                    <img  className="about-thumb1" src={img1}/>
                                 </div>

                                <div className="team-info">
                                  <div className="team-info-comntent">
                                     <h4 className="title-dt">Dr. Addition Smith</h4>
                                     <span className="text-dt">Dentist</span>
                                  </div>

                                <ul className="social-media">
                                <li>
                                  <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                   <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>

                                </a></li>

                                <li>
                                  <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                   <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                               </a></li>
                               
                               <li>
                              <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                               <SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                              </a>
                              </li>
                              </ul>
                                  </div>
                                 </div>
                                </div>


                              <div className="col-lg-4 col-sm-6 mb-30">
                                 <div className="team-m active">
                                 <div className="team-d">
                                   <img  className="about-thumb1" src={img2}/>
                              </div>

                              <div className="team-info">
                                  <div class="team-info-comntent">
                                    <h4 className="title-dt">Dr. Mahfuz Riad</h4>
                                      <span className="text-dt">Chiropractor</span>
                               </div>

                               <ul className="social-media">
                               <li>
                               <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>

                               </a>
                               </li>

                               <li>
                               <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                                 
                               
                               </a>
                               </li>

                               <li>
                               <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                <SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/></a></li>
                               
                               </ul>
                               </div>
                               </div>
                               </div>
                               
                               <div className="col-lg-4 col-sm-6 mb-30">
                               <div className="team-m">
                               <div className="team-d">
                                  <img  className="about-thumb1" src={img3}/>
                               </div>

                               <div className="team-info">
                               <div className="team-info-comntent">
                                 <h4 className="title-dt">Dr. David Benjamin</h4>
                                  <span className="text-dt">Cardiologist</span>
                               </div>

                               <ul className="social-media">
                               <li>
                               <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                                <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/></a></li>

                               <li>
                               <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                                <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/></a></li>
                               
                               <li>
                               <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                                <SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                               </a>
                               </li>
                               </ul>
                                 </div>
                                  </div>
                                 </div>
                                </div>
                               </div>
                               
                               </section>









                     <section className="section-area section-sp3 testimonial-wraper">
                                    <div className="container">
                                     <div className="heading-bx text-center">
                                             <h6 className="title-ext ">Testimonial</h6>
                                                <h2 className="title-dt">See What Are The Patients <br/>Saying About us</h2>
                                     </div>

                                         <div className="row align-items-center">
                                            <div className="col-lg-6 text-center">
                                              <div className="thumb-wraper">
                                                <img class="bg-img" src="data:image/png;base64,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" alt=""></img>
                                                   <ul>
                                    
                                      <li data-member="1">
                                      <a href="/About">
                                      <img  className="about-img" src={doc2}/>
                                      </a>
                                       </li>

                                      <li data-member="2">
                                      <a href="/About">
                                      <img  className="about-img" src={doc3}/>
                                      </a>
                                       </li>

                                      
                                      <li data-member="3">
                                      <a href="/About">
                                      <img  className="about-img" src={doc4}/>
                                      </a>
                                       </li>

                                      
                                      <li data-member="4">
                                      <a href="/About">
                                      <img  className="about-img" src={doc5}/>
                                      </a>
                                       </li>
                                      
                                      <li data-member="5">
                                      <a href="/About">
                                      <img  className="about-img" src={doc6}/>
                                      </a>
                                       </li>
                                      
                                      <li data-member="6">
                                      <a href="/About">
                                      <img  className="about-img" src={doc7}/>
                                      </a>
                                       </li>
                                    
                                  </ul>

                                  
                                  </div>
                                  </div>

                                  <div className="slick-slide " >
                                    <div className="row align-items-center">
                                    <div className="col-lg-6 text-center"></div>
                                      <div className="slider-item" >
                                         <div className="testimonial-bx">
                                          <div className="testimonial-content">
                                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecena ssuspendisse ultrices gravida.</p>
                                       </div>

                                  <div className="client-info">
                                    <h5 className="name">John Deo</h5>
                                    <p>patient</p>
                                  </div>

                                  <div className="quote-icon">
                                    <i className="fas fa-quote-left">

                                  </i>
                                   </div>
                                  
                                    </div>
                                     </div>
                                      </div>
                                                         
                  
                                  
                                  </div>
                                  
                                  </div>
                                </div>
                                <div className="about-pt">
                 <img  className="pt-1" src={download}/>
                 <img  className="pt-2" src={download2}/>
                 <img  className="pt-3" src={download1}/>
                 <img  className="pt-4" src={download6}/>
                 </div>
                                 
                                  </section>
               





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
                 <img  className="pt-5" src={download5}/>
                 <img  className="pt-7" src={download3}/>
                 <img  className="pt-6" src={download4}/>
                 </div>
         
                 
                                  </section>


            </>
    )
}
export default About;