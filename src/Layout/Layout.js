import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { InfoMainPage } from '../Homepage/InfoMainPage';
import { HomeNavbar } from '../Layout/HomeNavbar';
import { Footer } from '../Layout/Footer';
import { NewCard } from '../Homepage/NewCard';
import './Layout.css';

export class Layout extends Component{
   
    render (){
        
        return (
            <>     
              <HomeNavbar/>
              <Container id='mainContainer'>
                {this.props.children}
              </Container>
              <Footer/>
            </>
          );
    }
}