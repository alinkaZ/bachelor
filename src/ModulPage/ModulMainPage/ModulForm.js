import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { InfoModul } from './InfoModul';
import { Summary } from './Summary';
import { Instructor } from './Instructor';
import { Schedule } from './Schedule';
import './ModulForm.css';
import { Breadcrumbs } from './Breadcrumbs';

export class ModulForm extends Component {
    render () {
     return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={12}>
                    <Breadcrumbs/>
                    <h1>Header for the module</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    <InfoModul/>
                    <h4>Course topics</h4>
                    <Schedule id='schedule'/>
                </Col>
                <Col xs={6} md={4}>
                    <Container>
                        <Row>
                            <Button type="button"  href='/detailText'>Start the course</Button>
                        </Row>
                        <Row>
                            <Summary/>
                            
                        </Row>
                        <Row>
                            <Instructor/>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
     );
   }
 }