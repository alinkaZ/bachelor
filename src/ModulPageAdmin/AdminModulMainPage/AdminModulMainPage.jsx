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
//import Form from 'react-bootstrap/Form';

export class AdminModulMainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <label htmlFor="basic-url">
              Here You can add Name of your course
            </label>
            <WordInput rows="2" />
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <label htmlFor="basic-url">Describe briefly your course </label>
            <WordInput rows="14" />
          </Col>
          <Col xs={6} md={4}>
            <Container>
              <Row>
                <Button type="button" href="/textAdmin">
                  Add a content
                </Button>
              </Row>
              <Row>
                <br />
                <SummaryAdmin />
              </Row>
              <Row>
                <InstructorAdmin />
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
            <ScheduleAdmin />
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
