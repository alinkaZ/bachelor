import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { InsructorBox} from './InstructorBox';
import './Instructor.css';


export class Instructor extends Component{
  
    render (){
        return(
        <ListGroup>
            {this.props.dataInstructors.map((item)=>{
                return(<ListGroup.Item><InsructorBox item={item}/></ListGroup.Item> );
            })}
                    
        </ListGroup>
        );
    }
}