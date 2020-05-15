import React, { Component } from "react";
import "../ModulDetailPageVideo/Video.css";
import { Row } from "reactstrap";
import Col from "react-bootstrap/Col";

export class ModulDetailPageVideo extends Component {
  render() {
    return (
      <>
       
          <Col></Col>
          <Col xs={12} md={4}>
          <div className="videoImg">
            <img
              alt="hereShouldBeVideo"
              src="https://i.imgur.com/3fYa9Ak.png"
            />
          </div>
          </Col>
          <Col></Col>
       
      </>
    );
  }
}
