import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { InfoModul } from "./InfoModul";
import { Summary } from "./Summary";
import { Instructor } from "./Instructor";
import { Schedule } from "./Schedule";
import "./ModulForm.css";
import { Breadcrumbs } from "../../ModulPage/Breadcrumbs";
import { ModulData } from "../../Data/ModuleData";

export class ModulForm extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    let promise = fetch("https://localhost:44363/weatherforecast");
    promise
      .then((value) => {
        return value.json();
      })
      .then((value) => {
        console.log(value);

        this.setState({ data: value });
      });
    console.log(promise);
  }
  render() {
    console.log(this);
    return (
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={12}>
            <Breadcrumbs />
            <h1>{ModulData.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <InfoModul />
            <h4>Course topics</h4>
            <Schedule id="schedule" dataSchedule={ModulData.topics} />
          </Col>
          <Col xs={6} md={4}>
            <Container>
              <Row>
                <Button type="button" href="/detailText">
                  Start the course
                </Button>
              </Row>
              <Row>
                <Summary dataSummary={ModulData} />
              </Row>
              <Row>
                <Instructor dataInstructors={ModulData.lectors}/>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
