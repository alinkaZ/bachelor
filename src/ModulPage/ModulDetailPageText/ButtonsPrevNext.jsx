import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export class ButtonsPrevNext extends Component {
    render () {
     return (
        <Container>
            <Row>
                <Col xs={6} md={6}>
                    <Button variant="primary">Previous</Button>
                </Col>
                <Col xs={6} md={6}>                    
                    <Button variant="primary">Next</Button>   
                </Col>
            </Row>
        </Container>
     );
    }
}


