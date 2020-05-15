import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./SummaryAdmin.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class SummaryAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.value;
  }
  changeState = (event) => {
    let s = this.state;
    let field = event.target.id;
    if (typeof s[field] == "number") s[field] = event.target.value * 1;
    else s[field] = event.target.value;
    this.setState(s);
    this.props.onChange(s);
  };

  render() {
    return (
      <Form className="SummaryadminTable">
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Duration
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="Whole course duration "
              value={this.state.duration}
              onChange={this.changeState}
              id="duration"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Institution
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="Presented institution"
              value={this.state.institution}
              onChange={this.changeState}
              id="institution"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Subject
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="Define subject"
              value={this.state.subject}
              onChange={this.changeState}
              id="subject"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Price
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="Price for the course"
              value={this.state.price}
              onChange={this.changeState}
              id="price"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="3">
            Language
          </Form.Label>
          <Col sm="9">
            <Form.Control
              placeholder="Couse's main language"
              value={this.state.language}
              onChange={this.changeState}
              id="language"
            />
          </Col>
        </Form.Group>
      </Form>
    );
  }
}
