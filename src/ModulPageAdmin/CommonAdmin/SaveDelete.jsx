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
    console.log(this.props);
    if (this.props.onSave) {
      this.props.onSave();
    }
  };
  delete = (event) => {
    console.log(this.props);
    if (this.props.onDelete) {
      this.props.onDelete();
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={12} md={11}>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    You will delete this Page with all information. Page will be
                    stored in a bin and will be deleted forever after 6 month
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <Button onClick={this.delete}>Delete</Button>
                </span>
              </OverlayTrigger>
            </Col>
            <Col xs={12} md={1}>
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    You need to Save this Page. You can edit it anytime
                  </Tooltip>
                }
              >
                <span className="d-inline-block">
                  <Button onClick={this.save}>Save</Button>
                </span>
              </OverlayTrigger>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
