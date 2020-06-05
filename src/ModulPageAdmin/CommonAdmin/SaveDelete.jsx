import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export class SaveDelete extends Component {
  constructor(props) {
    super(props);
  }
  save = (event) => {
    console.log("OnSave", this.props);
    if (this.props.onSave) {
      this.props.onSave();
    }
  };
  delete = (event) => {
    console.log("OnDelete", this.props);
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  };

  render() {
    return (
      <>
        <Container className="SaveDelete"> 
          <Row>
            
            <Col xs={12} md={1}>
             {/* <OverlayTrigger
               overlay={
                  <Tooltip >
                    You will delete this Page with all information. Page will be
                    stored in a bin and will be deleted forever after 6 month
                  </Tooltip>
                }
              ></OverlayTrigger>*/}
             
                <Button onClick={this.delete}>Delete</Button>
              
            </Col>
            <Col></Col>
            <Col xs={12} md={1}>
              {/*<OverlayTrigger
                overlay={
                  <Tooltip >
                    You need to Save this Page. You can edit it anytime
                  </Tooltip>
                }
              ></OverlayTrigger>*/}
                <Button onClick={this.save}>Save</Button>
              
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
