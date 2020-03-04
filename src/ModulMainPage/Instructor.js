import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { InsructorBox} from './InstructorBox';
import './Instructor.css';
import coffeeImg from '../Assets/coffee.jpg';

export class Instructor extends Component{
    List = [{img:coffeeImg, name:'Elias',title:'lector',institution:'OsloMet'},{img:'https://2w6kxc22rrr9mabqt1mglgait6-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/man-shrug-beard-1024x580.jpg', name:'Alina Zielinska',title:'lector',institution:'OsloMet'},{img:'https://2w6kxc22rrr9mabqt1mglgait6-wpengine.netdna-ssl.com/wp-content/uploads/2019/08/man-shrug-beard-1024x580.jpg', name:'Bob Marley',title:'lector',institution:'OsloMet'}];
    render (){
        return(
        <ListGroup>
            {this.List.map((item)=>{
                return(<ListGroup.Item><InsructorBox item={item}/></ListGroup.Item> );
            })}
                    
        </ListGroup>
        );
    }
}