import React, { Component } from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { WordInput } from "../CommonAdmin/WordInput";
import AddPictureIcon from "../../../src/Assets/plus.png";
import "./AdminHomePage.css";

export class CardModulesAdmin extends Component{
    
    render(){
        return(
            <>
            <WordInput/>  
            <br/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://cdn.iview.abc.net.au/thumbs/2400/ck/CK1714V_59a4b949bbec1_1280.jpg" />
                <button onclick = "Add_Picture()">   
                    <img className="addIcon" src={AddPictureIcon}/>
                </button> 
                <Card.Body>
                    <Card.Title>New Course</Card.Title>
                    <Card.Text>
                    You can create a new course by pushing the button "Create"
                    </Card.Text>
                    <Button variant="primary" href="/create">Create</Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}

            