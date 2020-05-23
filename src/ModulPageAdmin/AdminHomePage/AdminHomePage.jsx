import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { WordInput } from "../CommonAdmin/WordInput";
import AddPictureIcon from "../../../src/Assets/plus.png";
import "./AdminHomePage.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Form from "react-bootstrap/Form";
import { authenticationService } from "../../utils/auth/authentication.service";
import { apiService } from "../../utils/API/apiService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardModulesAdminDelete } from "../../ModulPageAdmin/AdminHomePage/AdminPanelCards/CardModulesAdmin";
import Image from "../../Assets/image.png";


export class CardModulesAdmin extends Component {

  render() {
    return (
      <>
     
        <Row>
        <WordInput />
        </Row>
        <Row>
        <Card style={{ width: "16rem", height: "25rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.iview.abc.net.au/thumbs/2400/ck/CK1714V_59a4b949bbec1_1280.jpg"
            style={{ width: "16rem", height: "10rem" }}
          />
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                You can add a picture to your Modul on the next Page
              </Tooltip>
            }
          >
            <img
              onclick="Add_Picture()"
              className="addIcon"
              src={Image}
            />
          </OverlayTrigger>
          <Card.Body>
            <Card.Title>New Course</Card.Title>
            <Card.Text>
              You can create a new course by pushing the button "Create"
            </Card.Text>
            <Button variant="primary" href="/create">
              Create
            </Button>
          </Card.Body>
        </Card>
        <CardModulesAdminDelete/>
        </Row>
        
       
      </>
      
    );
  }
}
