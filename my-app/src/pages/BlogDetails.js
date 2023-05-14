/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Banner from "../components/Banner/Banner";
import './BlogDetails.css'
import doc3 from '../ASSESTS/doc3.jpeg'
import doc6 from '../ASSESTS/doc6.jpeg'
import doc4 from '../ASSESTS/doc4.jpeg'
import blog1 from '../ASSESTS/New folder/blog1.jpg'
import blog2 from '../ASSESTS/New folder/blog2.jpg'
import blog3 from '../ASSESTS/New folder/blog3.jpg'
import pic1 from '../ASSESTS/ourGallery/pic1.jpg'
import pic2 from '../ASSESTS/ourGallery/pic2.jpg'
import pic3 from '../ASSESTS/ourGallery/pic3.jpg'
import pic4 from '../ASSESTS/ourGallery/pic4.jpg'
import pic5 from '../ASSESTS/ourGallery/pic5.jpg'
import pic6 from '../ASSESTS/ourGallery/pic6.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from 'react-social-icons';


const BlogDetails =()=>{
    return(

        <>
         <Banner title="Blog Details" smtitle="Blog Details"/>

         <section className="section-area section-sp1 bg-white">
          <div className="container">
           <div className="row">
            <div className="col-md-12 col-lg-7 col-xl-8 mb-30 mb-md-50">
            <div className="blog-card blog-single">
            <div className="post-media">
            <img src={blog1}/>
             </div>
             <div className="info-bx">
             <ul className="post-meta">
              <li className="author">
              <a href="/BlogDetails">
              <img src={doc6}/>
               Sonar Moyna</a>
               </li>
               <li className="date">
               <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />
                19 July 2021</li>
               </ul>
                <div className="ttr-post-title">
                <h2 className="post-title">Precious Tips To Help You Get Better.</h2>
                </div>
                <div className="ttr-post-text">
                <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p><blockquote className="wp-block-quote">
                <p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content.</p></blockquote><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <ul className="wp-block-gallery columns-6 is-cropped">
                <li className="blocks-gallery-item">
                <img src={blog2}/>
                </li>
                <li className="blocks-gallery-item">
                <img src={blog3}/>
                </li>
                </ul>
                <p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="ttr-post-footer">
                <div className="post-tags">
                <strong>Tags:</strong>
                <a href="/BlogDetails">Health</a>
                <a href="/BlogDetails">Growth</a>
                <a href="/BlogDetails">Life</a>
                </div>
                <div className="share-post ml-auto">
                <ul className="social-media mb-0">
                <li>
                <strong>Share:</strong>
                </li>
                <li>
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                
                </a></li><li>
                <a rel="noreferrer" target="blank" href="https://www.instagram.com/">
                <SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                
                </a></li><li>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                </a></li><li>
                <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                </a>
                 </li>
                  </ul>
                   </div>
                    </div>
                     </div>
                      </div>
                <div className="author-box blog-user mb-50">
                <div className="author-profile-info">
                <div className="author-profile-pic"> 
                <img src={doc4}/>
                </div>
                 <div className="author-profile-content">
                 <h5>Sonar Z. Moyna</h5>
                 <p className="mb-20">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
                 <ul className="social-media mb-0">
                 <li>
                 <a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
                  <SocialIcon url="https://facebook.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                 </a></li><li>
                 <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
                 <SocialIcon url="https://instagram.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                 </a></li><li>
                 <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
                  <SocialIcon url="https://linkedin.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>
                 </a></li><li>
                 <a rel="noreferrer" target="_blank" href="https://twitter.com/">
                  <SocialIcon url="https://twitter.com/jaketrent" bgColor="none"  fgColor="white" style={{ height: 35, width: 35 }}/>

                 </a></li></ul></div></div></div>
                 <div className="clear" id="comment-list">
                 <div className="comments-area" id="comments">
                 <h4 className="widget-title">8 Comments</h4>
                 <div className="clearfix">
                 <ol className="comment-list">
                 <li className="comment">
                 <div className="comment-body">
                 <div className="comment-author vcard">
                 <img  className="avatar photo" src={doc3}/>
                 <div className="clearfix">
                 <cite className="fn">George</cite>
                 <span className="says">says:</span>
                 <div className="comment-meta"> 
                 <a href="/BlogDetails">May 09, 2021 at 10:45 am</a> 
                 </div></div></div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                 <div className="reply"> 
                 <a className="comment-reply-link" href="/BlogDetails">Reply</a> 
                 </div></div>
                 <ol className="children">
                 <li className="comment odd parent">
                 <div className="comment-body">
                 <div className="comment-author vcard">
                 <img  className="avatar photo" src={doc6}/>
                 <div className="clearfix">
                 <cite className="fn">Falikaz</cite>
                 <span className="says">says:</span>
                 <div className="comment-meta"> 
                 <a href="/BlogDetails">May 09, 2021 at 10:45 am</a>
                 </div></div></div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                 <div className="reply"> 
                 <a className="comment-reply-link" href="/BlogDetails">Reply</a>
                 </div></div></li></ol></li>
                 
                 <li className="comment">
                 <div className="comment-body">
                 <div className="comment-author vcard">
                 <img   className="avatar photo" src={doc6}/>

                 <div className="clearfix">
                 <cite className="fn">Sonar</cite>
                 <span className="says">says:</span>
                 <div className="comment-meta"> 
                 <a href="/BlogDetails">May 09, 2021 at 10:45 am</a>
                  </div></div></div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  <div className="reply"> 
                  <a className="comment-reply-link" href="/BlogDetails">Reply</a>
                   </div></div></li>
                   <li className="comment">
                   <div className="comment-body">
                   <div className="comment-author vcard">
                   <img  className="avatar photo" src={doc6}/>
                   <div className="clearfix">
                   <cite className="fn">Michel</cite>
                   <span className="says">says:</span>
                   <div className="comment-meta"> 
                   <a href="/BlogDetails">May 09, 2021 at 10:45 am</a> 
                   </div></div></div>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                   <div className="reply"> 
                   <a className="comment-reply-link" href="/BlogDetails">Reply</a>
                    </div></div></li></ol>

                    
                    <div className="comment-respond" id="respond">
                    <h4 className="widget-title">Leave a Reply</h4>
                    <form className="comment-form" id="commentform">
                    <p className="comment-form-author">
                     <label for="author">Name <span className="required">*</span></label>
                     <input type="text" name="Author" placeholder="Author" id="author" value=""/>

                     </p>
                     <p className="comment-form-email">
                     <label for="email">Email <span className="required">*</span></label>
                     <input type="text" placeholder="Email" name="email" id="email" value=""/>

                     </p>
                     <p className="comment-form-comment">
                     <label for="comment">Comment</label>
                     <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                     </p> 
                    
                      <p className="form-submit">
                       <input type="submit" className="submit" id="submit" name="submit" value="Submit Comment"/>
                       
                       </p>
                       </form></div></div></div></div></div>
                       
                       <div className="col-md-12 col-lg-5 col-xl-4 mb-30">
                       <aside className="side-bar sticky-top aside-bx">
                        <div className="widget widget_search">
                        <form className="searchform">
                        <div className="input-group">
                        <input name="text" className="form-control" placeholder="Enter your keywords..." type="text"/>
                        <div className="input-group-btn">
                        <a href="/BlogDetails" type="submit" className="btn btn-se">
                           <FontAwesomeIcon icon={faSearch}/> 
                         </a></div></div></form></div>
                         <div className="widget recent-posts-entry">
                         <h4 className="widget-title">Recent Posts</h4>
                         <div className="widget-post-bx">
                          <div className="widget-post clearfix">
                          <div className="ttr-post-media"> 
                          <img src={pic6}/>
                           </div>
                           <div className="ttr-post-info">
                           <div className="ttr-post-header">
                            <h6 className="post-title">
                             <a href="/BlogDetails">Precious Tips To Help You Get Better.</a>
                             </h6></div>
                             <ul className="post-meta">
                             <li className="date">
                              <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} /> 21 July 2021</li>
                              </ul></div></div>
                              <div className="widget-post clearfix">
                              <div className="ttr-post-media"> 
                              <img src={pic4}/> 
                              </div>
                              <div className="ttr-post-info">
                              <div className="ttr-post-header">
                              <h6 className="post-title">
                              <a href="/BlogDetails">Ten Doubts You Should Clarify About.</a>
                              </h6></div>
                              <ul className="post-meta">
                              <li className="date">
                              <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} />

                               20 July 2021</li>
                              </ul></div></div>
                              <div className="widget-post clearfix">
                              <div className="ttr-post-media"> 
                              <img src={pic6}/> 
                              </div>
                              <div className="ttr-post-info">
                               <div className="ttr-post-header">
                                <h6 className="post-title">
                                 <a href="/BlogDetails">The 10 Steps Needed For Putting.</a>
                                  </h6></div>
                                   <ul className="post-meta">
                                   <li className="date">
                                    <FontAwesomeIcon  className="post-icon" icon={faCalendarDays} /> 19 July 2021</li>
                                     </ul></div></div></div></div>
                                      <div className="widget widget_gallery gallery-grid-3">
                                       <h4 className="widget-title">Our Gallery</h4>
                                       <div>
                                       <ul className="magnific-image">
                                       <li>
                                       <img src={pic1}/>

                                       </li><li>
                                       <img src={pic2}/>

                                       </li><li>
                                       <img src={pic3}/>
                                       </li><li>
                                       <img src={pic4}/>
                                       </li><li>
                                       <img src={pic5}/>

                                       </li><li>
                                       <img src={pic6}/>

                                       </li></ul></div></div>
                                       <div className="widget widget_tag_cloud">
                                       <h4 className="widget-title">Tags</h4>
                                       <div className="tagcloud">
                                       <a  className="tag" href="/BlogDetails">Improvement</a>
                                       <a className="tag"  href="/BlogDetails">Health</a>
                                       <a className="tag"  href="/BlogDetails">Life</a>
                                       <a  className="tag" href="/BlogDetails">Covid</a>
                                       <a  className="tag" href="/BlogDetails">Healthy</a>
                                       <a className="tag"  href="/BlogDetails">Growth</a>
                                       <a  className="tag" href="/BlogDetails">Education</a>
                                       <a className="tag"  href="/BlogDetails">Manage</a>
                                       <a className="tag"  href="/BlogDetails">General</a>
                                       </div></div></aside></div></div></div>


                                       
                                       </section>

          
        </>




    )
}

export default BlogDetails;