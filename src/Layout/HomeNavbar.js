import React from 'react';
import './HomeNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export function HomeNavbar (){
    return(
        <>
        <Navbar bg="dark" fixed='top'>
          <Navbar.Brand href="#home"><img class="logo" src='https://blogg.hioa.no/wp-content/uploads/2018/12/oslomet-logo_gul.png'/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/modules" >Modules</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>
       </>
    );
}