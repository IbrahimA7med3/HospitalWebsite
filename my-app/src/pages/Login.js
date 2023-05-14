/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import './Login.css'
import logo from '../ASSESTS/logo.png'



const Login =()=>{
    return(
        <>
            <div className="section-area account-wraper2">
                  <div className="container">
                   <div className="row justify-content-center">
                   <div className="col-xl-5 col-lg-6 col-md-8">
                 <div className="appointment-form form-wraper">
                 <div className="logo">
             
            <img  className="logo-t" src={logo}/>
            </div>
            
            <form>
               <div className="form-group">
               <input placeholder="Name" />

               </div>
               <div className="form-group">
               <input placeholder="Password" />
                
               </div>

               <div class="form-group">
               <a type="button" className="btn-m" href="/Home">login</a>
               <a  className="forgot"  href="/Forgot">Forgot Password</a>
               </div>

               <div className="text-center ">
               <p className="text-t">Dont have any account?</p>
              
                <a   className="btn-d" href="/Register">Register</a>
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



export default Login;