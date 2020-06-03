import React, { Component } from "react";
import Image from "../../Assets/image.png";
import "./InstructorAdmin.css";
import AddPictureIcon from "../../../src/Assets/plus.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';

export class InstructorAdmin extends Component {
  changeSelected=(event)=>{
    console.log(event);
  }
  render() {
    return (
      <>
         {/*<Row>
          <div className="inctructorCard">
            <div className="instructor">
              <img src={Image} />
            </div>
            <div className="instructor">Describe lecturer of the course</div>
          </div>
        </Row>*/}
         <Row>
         {/*<OverlayTrigger
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
          </OverlayTrigger>*/}
          <Form.Group controlId="exampleForm.ControlSelect1" onChange={this.changeSelected}>
            <Form.Label>Select lecturer of the course</Form.Label>
            <Form.Control as="select">
              <option value="erika">Erika Gubrium</option>
              <option value="aadne">Aadne Aasland</option>
              <option value="linda"> Linda Cook</option>
              
            </Form.Control>
          </Form.Group>
        </Row>
      </>
    );
  }
}
