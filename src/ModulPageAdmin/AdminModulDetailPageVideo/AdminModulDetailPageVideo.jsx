import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";
import Form from "react-bootstrap/Form";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { SaveDelete } from "../CommonAdmin/SaveDelete";

export class AdminModulDetailPageVideo extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Breadcrumbs />
            <ButtonGroupAdmin />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            <PaginationRow />
          </Col>
        </Row>
        <Row>
        <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
          <Form>
            <Form.File
              id="custom-file-translate-scss"
              label="Upload your video file"
              lang="en"
              custom
            />
          </Form>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col xs={12} md={12}>
            <SaveDelete />
          </Col>
        </Row>
      </Container>
    );
  }
}
