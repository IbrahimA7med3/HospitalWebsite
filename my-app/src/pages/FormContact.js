
import React from 'react';
import { useState } from 'react';

const FormContact =()=>{


  const [name , setname] = useState("");
  const [email , setemail] = useState("");
  const [phonenumbers , setphonenumbers] = useState(""); 

  const changename= (event)=>{
    setname(event.target.value);
  }
 
  const changeemail= (event)=>{
    setemail(event.target.value);
  }
   
 
  const changephonenumbers= (event)=>{
    setphonenumbers(event.target.value);

  }

 
 

  const FormHandler = (event) =>{
     event.preventDefault();
    

     console.log(name);
     console.log(email); 
     console.log(phonenumbers);
    
 
}
    return(

<form onSubmit={FormHandler}>
                      <div className=" form-control ">
                        <input placeholder="Your Name" onChange={changename}/>
                         
                      </div><br/>
                      <div className=" form-control ">
                        <input placeholder="Your Email" onChange={changeemail}/>
                      </div><br/>
                      <div className=" form-control ">
                        <input placeholder="Phone Numbers" onChange={changephonenumbers}/>
                      </div><br/><br/>
                      <select>
                        <option > Select Depatment   </option>
                        <option>One</option>
                        <option>Two</option>
                        <option>Three</option>
                      </select>
                      <div className=" form-control ">
                        <textarea placeholder="Type Message" ></textarea>
                      </div><br/>
                      <button>Submit</button>
                      </form>


    ) 
    }


export default FormContact;