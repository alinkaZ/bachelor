import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export class Breadcrumbs extends Component {
  constructor(params) {
    super(params);
    this.state = {
      modulID: this.params,
    };
  }
  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/modules">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/modules/${this.state.modulID}">Module</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Lesson</Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}
