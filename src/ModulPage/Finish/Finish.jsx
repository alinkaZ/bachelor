import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Finish.css';



export class Finish extends Component{
    render(){
        return(
            <div className='finish'>
                <h1>Congratulations!</h1>
                <p>You've complited the course</p>
                <Button variant="primary">Finish</Button>
            </div>
        );
    }
}