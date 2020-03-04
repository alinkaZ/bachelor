import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './AboutPage.css';


export class AboutPage extends Component {
    render () {
     return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={12}>
                    <h1>About the Project</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8}>
                    
                    
                    <p>Developed and led by experts in the fields of social policy, social work, and urban studies, this course provides an introduction to work and social inclusion of migrants in the comparative urban contexts of Bangalore, Moscow and Oslo.</p>

                    <p>In the course, we will use a visual and interactive approach to explore theories and methods for evaluating work inclusion measures, as well as the crucial strategies and factors that are often not considered. You will gain knowledge of how poverty may be understood and compared across the three settings and will learn alternative conceptual approaches to the more traditional income-focused one.</p>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='imgAbout'>
                            <img src='https://images.unsplash.com/photo-1494491784568-f5188621923a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80'/>
                            </div>
                        </Col>  
                        <Col xs={12} md={6}>
                            <p>You will learn new ways to evaluate the work inclusion strategies beyond those currently used. Our focus is on moving beyond an income-only focus in order to improve the social inclusion of target groups through work. Using a “situated” work inclusion approach, the course will provide an appreciation of the historical, social-material and psychological factors shaping the success of inclusion methods targeted to diverse and often marginalized populations and identities.</p>  
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <p>We will focus on:</p>
                            <ul>
                                <li>methods and theories for understanding and measuring poverty in comparative settings</li>
                                <li>policy strategies and necessary considerations developing inclusion measures</li>
                                <li>evaluation of current work inclusion measures using alternative approaches to a focus on income</li>
                            </ul>
                            <p>The course will move between different levels of experiences shaping the success of work and social inclusion measures, including a biographical approach to the everyday life of the target group individuals, the factors of changing place and space before and after migration, as well as the structural and institutional factors shaping inclusion experiences. The concepts and ideas you will learn will help you to reflect upon current practices and improve practices for often marginalized communities.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='imgAbout'>
                                <img src='https://images.unsplash.com/photo-1526572690437-c3f99d109cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'/>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} md={4} >
                    <div className="partnersLogo">
                        <Row><a target="_blank" href='https://www.oslomet.no/'><img src='https://pbs.twimg.com/media/DQNYHkZWAAUc73Z.jpg:large' alt='OsloMet logo'/></a></Row>
                        <Row><a target="_blank" href='https://www.nls.ac.in/'><img src='https://www.nls.ac.in/wp-content/uploads/2019/10/NLS-Logo-Red.png' alt='University in India logo'/></a></Row>
                        <Row><a target="_blank" href='https://www.hse.ru/en/'><img src='https://www.hse.ru/images/main_en/hse_en_logo.svg' alt='Higher School of Economics in Moscow logo'/></a></Row>
                    </div>
                </Col>
                
            </Row>
        </Container>
     );
   }
 }
