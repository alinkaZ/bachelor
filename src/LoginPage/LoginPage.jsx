import React, { Component } from "react";
//import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "reactstrap";
import "./LoginPage.css";
import Facebook from "./components/Facebook";
import authProvider from "../utils/auth/authProvider";
import { authenticationService } from "../utils/auth/authentication.service";
import { FormErrors } from "./components/FormErrors";
import RegisterModalForm from "./components/RegisterModalForm"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';




export class LoginPage extends Component {
  constructor(){
    super();

    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false,
      modalShow: false
    }
  //
  }

  handleUserInput = (e) => {
    console.log("smmmm");
    const type = e.target.type;
    const value = e.target.value;
    this.setState({[type]: value},
      () => { this.validateField(type, value) });
  }

  LoginHandler = (value) => {
    console.log("unmo");
    if(authProvider.login(this.state.email, this.state.password)){
      //window.location.href="/admin";
      return () => {return true}
    } else {
      return () => {return false}
    }
    // return ((value) => {authProvider.login(this.state.email, this.state.password);
    // })
  }

  RegisterHandler () {

    return(0)
  }

  setModalShow (modalShow) {
    this.setState({
      modalShow: modalShow
    })
  }




  render() {
    // const [modalShow, setModalShow] = React.useState(false);

    return (
      <Container>
        <Row>
          <Col xm={12} xs={4}></Col>
          <Col xm={12} xs={4}>
            <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('Email is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
                      console.log("email", email, "password", password);
                        setStatus();
                        authenticationService.login(email, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                              <Field name="checkOut" type="checkbox" />
                              <label htmlFor="checkOut">Check me out</label>
                            </div>
                            <div className="form-group">
                              <Row>
                              <Button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSubmitting}
                              >
                                Submit
                              </Button>
                              <Button
                                variant="primary"
                                size="lg"
                                onClick={() => {this.setModalShow(true)}}
                              >
                                Register
                              </Button>
                              <RegisterModalForm
                                show={this.state.modalShow}
                                onHide={() => {this.setModalShow(false)}}
                              />
                          </Row>
                            </div>
                        </Form>
                    )}
                />
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
