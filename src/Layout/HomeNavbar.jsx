import React from 'react';
import './HomeNavbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


const controlPage = () => {
    console.log("uno", localStorage.getItem("sessionToken"));
    if (localStorage.getItem("sessionToken"))
    return(
      <>
      <NavDropdown title="Dropdown" id="nav-dropdown" eventKey="3">
        <NavDropdown.Item eventKey="3.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="3.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item
          onClick={localStorage.removeItem("sessionToken")}
          href="/"
        >
          Logout
        </NavDropdown.Item>
      </NavDropdown>
      </>
    )
    else {
      return(
        <>
        <Nav.Link href="/login">Login</Nav.Link>
        </>
      )
    }
}

export function HomeNavbar (){
    return(
        <>
        <Navbar bg="dark" fixed='top'>
          <Navbar.Brand href="#home"><img className="logo" src='https://blogg.hioa.no/wp-content/uploads/2018/12/oslomet-logo_gul.png'/></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/modules" eventKey="1">Modules</Nav.Link>
            <Nav.Link href="/about" eventKey="2">About</Nav.Link>
            {controlPage()}
          </Nav>
        </Navbar>
       </>
    );
}
