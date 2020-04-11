import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { WordInput } from "../WordInput";
import { SummaryAdmin } from "../AdminModulMainPage/SummaryAdmin";
import { InstructorAdmin } from "./InstructorAdmin";
import { ScheduleAdmin } from "./ScheduleAdmin";
//import EditIcon from '.../Assets/edit.png';
//import Form from 'react-bootstrap/Form';





export class AdminModulMainPage extends Component {
    render () {
     return (
        <Container>
            <Row>
                <Col xs={12} md={8}>
                    <label htmlFor="basic-url">Here You can add Name of your course</label>
                    <WordInput/> 
                    <br/>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <label htmlFor="basic-url">Describe briefly your course </label>
                    <WordInput/> 
                </Col>
                <Col xs={6} md={4}>
                    <Container>
                        <Row>
                            <Button type="button"  href='/detailText'>Add a content</Button>
                            
                        </Row>
                        <Row>
                            <br/>
                            <SummaryAdmin/> 
                            {/*img:EditIcon;*/}
                        </Row>
                        <Row>
                            <InstructorAdmin/>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xm={8}>
                    <Button type="button"  href='/detailText'>Download schedule</Button>
                    <label htmlFor="basic-url">Describe schedule of the course </label>
                    <ScheduleAdmin/>
                </Col>
           </Row>
            <Row>
                <Col xs={6} md={4}>
                    <Button type="button"  href='/detailText'>Publish</Button>
                </Col>
                <Col xs={6} md={4}>
                    <Button type="button"  href='/detailText'>Delete</Button>
                </Col>
                <Col xs={6} md={4}>
                    <Button type="button"  href='/detailText'>Save</Button>
                </Col>
                {/*<Form>
                    <div className="mb-3">
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label> Here You can download schedule to the course</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                    </div>
                </Form>*/}
            </Row>
        </Container>
     );
   }
 }
