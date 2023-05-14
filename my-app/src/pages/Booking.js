import React from "react";
import './Booking'

import Banner from "../components/Banner/Banner"
const Booking =()=>{

    return(

      <>

           <Banner title="Booking" smtitle="booking"/>
             

           
          <section className="section-area section-sp2 appointment-wraper">
                 <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-6">
                      <div className="appointment-form form-wraper">
                         <h3 className="title">Book Appointment</h3>

                            <form>
                            <div className="form-group">
                            <select className="form-select form-control">
                                <option>Selecty Department</option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                           </select>
                           </div>
                             <div className="form-group">
                             <select className="form-select form-control">
                            m   <option>Select Doctor</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                             </select>
                             </div>

                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                              </div>

                               <div className="form-group">
                                 <input type="number" className="form-control" placeholder="Phone Numbers"/>
                               </div>

                               <div className="form-group">
                                 <input type="date" className="form-control"/>
                               </div>

                                 <button>Appointment Now</button>
                                 
          </form></div></div></div></div>
          </section>
          

            

      </>




    )
}


export default Booking;
