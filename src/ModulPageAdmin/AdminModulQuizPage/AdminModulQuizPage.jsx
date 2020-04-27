import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { SaveDelete } from "../CommonAdmin/SaveDelete";
import { Question } from "../AdminModulQuizPage/Question";


export class AdminModulDetailPageQuiz extends Component {
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
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <PaginationRow />
          </Col>
        </Row>
        <Row>
          <Question/>
        </Row>
        <Row>
          <Col xs={12} md={11}>
          <SaveDelete />
          </Col>
        </Row>
      </Container>
    );
  }
}
