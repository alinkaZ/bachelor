import React, { Component } from 'react';
import './Header.css';

 
 
 export class Header extends Component{
    render(){
        return(
            <div className='header'>
                <h1>{this.props.TextDataHeader}</h1>
                {/*The Norwegian Welfare State*/}
            </div>
        );
    }
}

