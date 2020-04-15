import React, { Component } from 'react';
import Image from "../../Assets/image.png";
import './InstructorAdmin.css';


export class InstructorAdmin extends Component{
    render(){
        return(
                <div className="inctructorCard">
                    <div className="instructor">
                        <img src={Image}/>
                    </div>                
                    <div className="instructor">
                        Describe lecturer of the course
                
                    </div>
               </div>
            );
        }
        
    }