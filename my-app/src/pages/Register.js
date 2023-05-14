/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import logo from '../ASSESTS/logo.png'




const Register =()=>{
    return(
        <>
            <div className="section-area account-wraper2">
                  <div className="container">
                   <div className="row justify-content-center">
                   <div className="col-xl-5 col-lg-6 col-md-8">
                 <div className="appointment-form form-wraper">
                 <div className="logo">
             
            <img className="logo-t" src={logo}/>
            </div>
            
            <form>
               <div className="form-group">
               <input placeholder="Name" />

               </div>
               
               <div className="form-group">
               <input type="email"  placeholder="Email"/>
                </div>

                <div class="form-group">
                <input type="text"  placeholder="Username"/>
                </div>

               <div className="form-group">
               <input placeholder="Password" />
                
               </div>

               <div class="form-group">
               <a type="button" className="btn-m" href="/Login">Register Now</a>
               <a  className="text-d"  href="/Forgot">Already have an account?</a>
               </div>

               <div className="text-center ">
             
              
               <a   className="btn-d" href="/Login">Login</a>
               
               </div>

               
                        

            </form>
            
            
            
            </div>
            </div>
            </div>
            </div>
            </div>




        </>
    )
}



export default Register;