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
  constructor(props) {
    super(props);
    this.state = {
      data: {
        moduleID: 0,
        teacherID: 5,
        adminID: 5,
        institution: "",
        description: "",
        language: "",
        title: "",
        picture: "",
        price: 0,
        duration: 0,
      },
    };
  }
  componentDidMount() {
    //debugger;
    console.log(this.props.match);
    let { modulId } = this.props.match.params;
    if (modulId != null) {
      apiService
        .getModuleByID(modulId)
        .then((data) => this.setState({ data: data }));
      console.log(this.props);
    }
  }

  changeState = (event) => {
    let s = this.state.data;
    let field = event.target.id;
    s[field] = event.target.value;
    this.setState({ data: s });
  };
  saveModul = (event) => {
    if (this.state.data.moduleID == 0) {
      apiService.createModule(this.state.data).then((x) => {
        console.log(x);
      });
    } else {
      apiService
        .updateModuleByID(this.state.data.moduleID, this.state.data)
        .then((x) => {
          console.log(x);
        });
    }
  };
  updateState = (data) => {
    this.setState({ data: data });
    console.log(data);
  };

  render() {
    let { modulId } = this.props.match.params;
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
                value={this.state.data.title}
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
                value={this.state.data.description}
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
                <Button type="button" href={`/modules/${this.state.data.moduleID}/edit/lessons/create`}>
                  Add a content
                </Button>
              </Row>
              <Row>
                <br />
                {/*(modulId == this.state.data.moduleID || modulId == null) && (
                  
                )*/}
                <SummaryAdmin
                    value={this.state.data}
                    onChange={this.updateState}
                  />
              </Row>
              <Row>
                <InstructorAdmin
                  data={this.state.data.value}
                  onChange={this.updateState}
                />
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
