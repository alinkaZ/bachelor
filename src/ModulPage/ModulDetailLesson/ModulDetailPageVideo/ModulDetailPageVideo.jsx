import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Row } from "reactstrap";
import Col from "react-bootstrap/Col";

export class ModulDetailPageVideo extends Component {
  render() {
    return (
      <>
        <Row className="justify-content-md-center">
          
            <ReactPlayer url={this.props.info.details} />
            <br />
          
        </Row>
      </>
    );
  }
}
