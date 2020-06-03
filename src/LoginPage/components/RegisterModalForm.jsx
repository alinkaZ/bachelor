import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "../../utils/auth/authentication.service";
import { apiService } from "../../utils/API/apiService";

function newUser (data){
  apiService.createUser(data).then((x) => {
    console.log("registration data", x);
  });
}


const RegisterModalForm = (props) => {
  //const [name, surName, email, username, password];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Register page</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            username: "",
            password: "",
            
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
            console.log("email", email, "password", password);
            setStatus();
            authenticationService.register(email, password).then(
              (user) => {
                const { from } = this.props.location.state || {
                  from: { pathname: "/" },
                };
                this.props.history.push(from);
              },
              (error) => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  name="name"
                  type="text"
                  className={
                    "form-control" +
                    (errors.name && touched.name ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <Field
                  name="surname"
                  type="text"
                  className={
                    "form-control" +
                    (errors.surname && touched.surname ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                  Close
                </Button>
                <Button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  
                  onClick={newUser}
                >
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          )}
        />
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModalForm;
