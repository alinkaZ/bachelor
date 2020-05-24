import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { apiService } from '../../utils/API/apiService';

export class ButtonsPrevNext extends Component {
    toNextPage=()=>{
        if (this.props.toNextPage) {
            this.props.toNextPage();
          }
    }
    toPreviousPage=()=>{
        if (this.props.toPreviousPage) {
            this.props.toPreviousPage();
          }
    }
    render () {
     return (
        <Container>
            <Row>
                <Col xs={6} md={6}>
                    <Button variant="primary" onClick={this.toPreviousPage}>Previous</Button>
                </Col>
                <Col xs={6} md={6}>                    
                    <Button variant="primary" onClick={this.toNextPage} >Next</Button>   
                </Col>
            </Row>
        </Container>
     );
    }
}


