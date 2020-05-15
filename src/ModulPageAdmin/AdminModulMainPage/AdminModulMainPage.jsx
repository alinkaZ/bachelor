import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { WordInput } from "../CommonAdmin/WordInput";
import { SummaryAdmin } from "./SummaryAdmin";
import { InstructorAdmin } from "./InstructorAdmin";
import { ScheduleAdmin } from "./ScheduleAdmin";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { apiService } from "../../utils/API/apiService";
//import Form from 'react-bootstrap/Form';

export class AdminModulMainPage extends Component {
  constructor() {
    super();
    this.state = {
      moduleID: 0,
      teacherID: 5,
      adminID: 5,
      institution: "string",
      description: "string",
      language: "string",
      title: "string",
      picture: "string",
      price: 0,
      duration: 0,
    };
  }

  changeState = (event) => {
    let s = {};
    let field = event.target.id;
    s[field] = event.target.value;
    this.setState(s);
  };
  saveModul = (event) => {
    apiService.createModule(this.state).then((x) => {
      console.log(x);
    });
  };
  updateState = (data) => {
    this.setState(data);
    console.log(data);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Add Name of your course</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={this.state.title}
                onChange={this.changeState}
                id="title"
                rows="2"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <br />
            <label htmlFor="basic-url">Describe briefly your course </label>
            {/*<WordInput rows="14" />*/}
            <InputGroup>
              <FormControl
                as="textarea"
                aria-label="With textarea"
                value={this.state.description}
                onChange={this.changeState}
                id="description"
                rows="14"
              />
            </InputGroup>
          </Col>
          <Col xs={6} md={4}>
            <Container>
              <Row>
                <Button type="button" onClick={this.saveModul}>
                  Save
                </Button>
                <Button type="button" href="/textAdmin">
                  Add a content
                </Button>
              </Row>
              <Row>
                <br />
                <SummaryAdmin value={this.state} onChange={this.updateState} />
              </Row>
              <Row>
                <InstructorAdmin data={this.state.value} />
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col xs={12} xm={8}>
            <Button type="button" href="/detailText">
              Download schedule
            </Button>
            <label htmlFor="basic-url">Describe schedule of the course </label>
          </Col>
        </Row>
        <Row>
          <Col xs={8} xm={12}>
            <ScheduleAdmin data={this.saveModul} />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  Click this button to Publish your Model and make it visible
                  for all. You can do it later. Just save it.
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: "none" }}>
                  Publish
                </Button>
              </span>
            </OverlayTrigger>
          </Col>

          <Col xs={6} md={4}>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  You will delete all Modul with all information. Modul will be
                  stored in a bin and will be deleted forever after 6 month
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: "none" }}>
                  Delete
                </Button>
              </span>
            </OverlayTrigger>
          </Col>

          <Col xs={6} md={4}>
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  You need to Save your modul. It will not be Published until
                  you will Published it.
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button disabled style={{ pointerEvents: "none" }}>
                  Save
                </Button>
              </span>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    );
  }
}
