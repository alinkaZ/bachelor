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
import { Breadcrumbs } from "../Common/Breadcrumbs";
import { ModulData } from "../../Data/ModuleData";
import { apiService } from "../../utils/API/apiService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export class ModulForm extends Component {
  constructor() {
    super();
    this.state = { data: [], ModulData: {} };
  }
  componentDidMount() {
    let { modulId } = this.props.match.params;
    apiService
      .getModuleByID(modulId)
      .then((data) => this.setState({ ModulData: data }));
    console.log(this.props);
  }

  render() {
    console.log("modulForm", this);
    let url = window.location.href;

    return (
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={12}>
            <Breadcrumbs />
            <h1>{this.state.ModulData.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <p> {this.state.ModulData.description}</p>
            <h4>Course topics</h4>
            <Schedule id="schedule" dataSchedule={ModulData.topics} />{" "}
            {/*<this.state add when it will be on the API*/}
          </Col>
          <Col xs={12} md={4}>
            <Container>
              <Row>
                <Button type="button" href={`${url}/lessons/001`}>
                  Start the course
                </Button>
              </Row>
              <Row>
                <Summary dataSummary={this.state.ModulData} />
              </Row>
              <Row>
                <Instructor dataInstructors={ModulData.lectors} />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
