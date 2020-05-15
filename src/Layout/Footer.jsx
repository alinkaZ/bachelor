import React from 'react';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export function Footer(){
    return(
        <div className='footer'>

        <Navbar id="footer">

          <Nav className="mr-auto" >
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#features">Contacts</Nav.Link>
            <Nav.Link href="#pricing">Something</Nav.Link>
            <Nav.Link href="#pricing">Personal info</Nav.Link>
          </Nav>
        </Navbar>

        <div className="personalInfo">
            <p>Website made with ♡</p>
            <p>Copyright © 2020 All Rights Reserved </p>
        </div>

        </div>
    );
}
