import React from 'react';
import './Footer.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export function Footer(){
    return(
        <>
        
        <Navbar id="footer">
          
          <Nav className="mr-auto footer" >
            <Nav.Link href="#home">About us</Nav.Link>
            <Nav.Link href="#features">Contacts</Nav.Link>
            <Nav.Link href="#pricing">Something</Nav.Link>
            <Nav.Link href="#pricing">Personal info</Nav.Link>
          </Nav>
        </Navbar>

        <div class="personalInfo">
            <p>Website made with ♡</p>
            <p>Copyright © 2020 All Rights Reserved </p>
        </div>
       
        </>      
    );
}
