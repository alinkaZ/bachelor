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
  url = "";
  constructor(params) {
    super(params);
    this.state = {
      data: [],
      ModulData: {},
      modulId: "",
      lessons: [],
    };
  }
  componentDidMount() {
    let { modulId } = this.props.match.params;
    this.setState({ modulId });
    apiService
      .getModuleByID(modulId)
      .then((data) => this.setState({ ModulData: data }));
    apiService
      .lessons(modulId)
      .then((data) => this.setState({ lessons: data }));
  }

  render() {
    console.log("modulForm", this);
    const filteredLessons = this.state.lessons.filter(lesson => lesson.moduleID == this.state.modulId );
    console.log("filteredLessons ", filteredLessons );
    

    return (
      <Container>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={8}>
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
              <Button>
                  <Link
                    to={`${this.state.modulId}/lessons/${this.state.lessons[0] && filteredLessons[0].lessonID}`}
                  >
                    Start the course
                  </Link>
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
