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
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      newQuestion: {
        name: "",
        explanation: "",
        answers: [],
        newAnswer: { name: "", isRight: false },
      },
    };
  }

  addNewQuestion = (item) => {
    console.log(this.state);
    this.setState({
      questions: [...this.state.questions, item],
      newQuestion: {
        name: "",
        explanation: "",
        answers: [],
        newAnswer: { name: "", isRight: false },
      },
    });
    console.log(this.state);
  };

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
          <Col xs={12} md={5}></Col>
          <Col xs={12} md={1}>
            <PaginationRow />
          </Col>
        </Row>
        <Row>
          {this.state.questions.map((item, index) => {
            return <Question key ={index} data={item} />;
          })}
        </Row>
        <Row>
          <Question data={this.state.newQuestion} onAdd={this.addNewQuestion} />
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
