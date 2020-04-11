import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LoginPage.css';

export class LoginPage extends Component{
    render(){
        return(
            <Row>
                <Col xs={12} md={4}>

                </Col>
                <Col xs={12} md={4}>
                    <Form>
                        <h1 className='loginh1'>Log in</h1>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg" href="/admin">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col xs={12} md={4}>
                    
                </Col>
            </Row>
        );
    }
}