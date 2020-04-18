import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "reactstrap";
import "./LoginPage.css";
import Facebook from "./components/Facebook";


export class LoginPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xm={12} xs={4}></Col>
          <Col xm={12} xs={4}>
            <Form>
              <h1 className="loginh1">Log in</h1>
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
              <Row>
                <Button variant="primary" type="submit" size="lg" href="/admin">
                  Submit
                </Button>
                <Button
                  variant="primary"
                  type="register"
                  size="lg"
                  href="/admin"
                >
                  Register
                </Button>
              </Row>
            </Form>
          </Col>
          <Col xm={12} xs={4}></Col>
        </Row>
        <Row>
          <Col xm={12} xs={4}></Col>
          <Col xm={12} xs={4} className="facebook">
            <hr />
            <p>or signup with</p>
            <hr />
          </Col>
          <Col xm={12} xs={4}></Col>
        </Row>
        <Row>
          <Col xxm={12} xs={4}></Col>
          <Col xm={12} xs={4}>
            <div className="facebook">
              <Facebook />
            </div>
          </Col>
          <Col xm={12} xs={4}></Col>
        </Row>
      </Container>
    );
  }
}
