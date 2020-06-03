import React, { Component } from "react";

import { Row } from "reactstrap";
import Col from "react-bootstrap/Col";

export class ModulDetailPageVideo extends Component {
  render() {
    return (
      <>
      <Row>
        <Col ></Col>
        <Col xs={12} md={6}>
          
            <video width="750" height="500" controls>
              <source
                alt="here Should Be a Video"
                src={this.props.info.details}
                type="video/mp4"
              />
            </video>
          
        </Col>
        <Col></Col>
        </Row>
      </>
    );
  }
}
