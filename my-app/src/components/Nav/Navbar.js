/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Navbar, Container ,  NavDropdown , Nav} from 'react-bootstrap';
import './Nav.css';
import logo from '../../ASSESTS/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";



const Navbars = ()=>{
return(
<Navbar  expand="lg">  
<Container>
  <Navbar.Brand>
  <img src={logo} title="logo"/>
  </Navbar.Brand> 
   
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Link to="/home" className="active">Home</Link>

      <NavDropdown title="page" id="basic-nav-dropdown">
        <NavDropdown.Item href="/About">About Us</NavDropdown.Item>
        <NavDropdown.Item href="/OurTeam">Our Team</NavDropdown.Item>
        <NavDropdown.Item href="/Faqs">FQs</NavDropdown.Item>
       
        <NavDropdown.Item href="/Booking">Booking</NavDropdown.Item>
        <NavDropdown.Item href="/Error404">Error 404</NavDropdown.Item>
        <NavDropdown.Item href="/Login">Login / register </NavDropdown.Item>
      </NavDropdown>
       <NavDropdown title="services" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Services"> Services</NavDropdown.Item>
        <NavDropdown.Item href="/ServicesDetails">Services Details</NavDropdown.Item>
        
      </NavDropdown>
       <NavDropdown title="blogs" id="basic-nav-dropdown">
        <NavDropdown.Item href="/BlogGrid">BlogGrid</NavDropdown.Item>
        <NavDropdown.Item href="/BlogDetails">Blog Details</NavDropdown.Item>
      </NavDropdown>

    <Link to="/contact"> contact us </Link>
    
    <Nav.Link>
     <FontAwesomeIcon icon={faPhone} className="phone" /> (+01)9998877</Nav.Link>
    <Link to="/contact" >
     <button> contact us <span><FontAwesomeIcon icon={faAngleRight} /></span> </button>
    </Link>
    </Nav> 
  </Navbar.Collapse>
</Container>
</Navbar>


)

}



export default Navbars;