import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "./SummaryAdmin.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export class SummaryAdmin extends Component{
    render(){
        return(
            <Form>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Duration
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Whole course duration " />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Institution
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Presented institution" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Subject
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Define subject" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Price
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Price for the course" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="3">
                    Language
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control type="password" placeholder="Couse's main language" />
                    </Col>
                </Form.Group>
            </Form>
            /*<Table responsive>
                <tbody>
                    <tr>
                                        <td>Duration</td>
                                        <td><Form.Label>Write the duration of your course</Form.Label></td>
                                    </tr>
                                    <tr>
                                        <td>Institution</td>
                                        <td></td>
                                    </tr> 
                                    <tr>
                                        <td>Subject</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Language</td>
                                        <td></td>
                    </tr>
                </tbody>
            </Table>*/
         );
    }
    
}


