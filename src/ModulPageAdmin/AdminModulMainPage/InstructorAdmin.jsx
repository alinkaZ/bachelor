import React, { Component } from "react";
import Image from "../../Assets/image.png";
import "./InstructorAdmin.css";
import AddPictureIcon from "../../../src/Assets/plus.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";

export class InstructorAdmin extends Component {
  render() {
    return (
      <>
        <Row>
          <div className="inctructorCard">
            <div className="instructor">
              <img src={Image} />
            </div>
            <div className="instructor">Describe lecturer of the course</div>
          </div>
        </Row>
        <Row>
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Add information about one more instrutor
              </Tooltip>
            }
          >
            <img
              onclick="Add_Picture()"
              className="addIcon"
              src={AddPictureIcon}
            />
          </OverlayTrigger>
        </Row>
      </>
    );
  }
}
