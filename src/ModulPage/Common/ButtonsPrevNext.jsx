import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { apiService } from '../../utils/API/apiService';

export class ButtonsPrevNext extends Component {
    constructor (params){
        super(params);
        this.state={
            currentLesson:this.params,
        }
    }
   
    toTheNextPage=()=>{
        if (this.props.toNextPage) {
            this.props.toNextPage();
          }
    }
    toThePreviousPage=()=>{
        if (this.props.toPreviousPage) {
            this.props.toPreviousPage();
        }
    }
    render () {
     return (
        <Container>
            <br/>
            <Row>
                <Col xs={6} md={6}>
                    <Button variant="primary" onClick={this.toThePreviousPage}>Previous</Button>
                </Col>
                <Col xs={6} md={6}>                    
                    <Button variant="primary" onClick={this.toTheNextPage} >Next</Button>   
                </Col>
            </Row>
        </Container>
     );
    }
}


