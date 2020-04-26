import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "reactstrap";
import "./LoginPage.css";
import Facebook from "./components/Facebook";
import authProvider from "../utils/auth/authProvider";
import FormErrors from "./components/FormErrors";

export class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    //this.loginEmail = React.createRef();
  }

  handleUserInput = (e) => {

    const type = e.target.type;
    const value = e.target.value;
    console.log(type);
    this.setState({[type]: value},
      () => { this.validateField(type, value) });
  }

  LoginHandler (value) {

    return ((value) => {
    authProvider.login(this.state.email, this.state.password);
    })
  }

  RegisterHandler () {

    return(0)
  }

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
  }validateForm() {
    this.setState({formValid: this.state.emailValid &&
                              this.state.passwordValid});
  }

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
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleUserInput}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleUserInput}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Row>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  href="/admin"
                  onClick={this.LoginHandler()}
                  disabled={!this.state.formValid}
                >
                  Submit
                </Button>
                <Button
                  variant="primary"
                  type="register"
                  size="lg"
                  href="/admin"
                  onClick={this.RegisterHandler()}
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
