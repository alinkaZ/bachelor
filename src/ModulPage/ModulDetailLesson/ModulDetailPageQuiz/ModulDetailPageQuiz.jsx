import React, { Component } from "react";
import { Question } from "./Question";
import { PopUpCorrectAnswer } from "./PopUpCorrectAnswer";
import { quizData } from "../../../Data/QuizData";
import { Container, Row, Col } from "reactstrap";

export class ModulDetailPageQuiz extends Component {
  render() {
    return (
      <>
        {quizData.map((item) => {
          return (
            <Container>
              <Row>
                <Col></Col>
                <Col></Col>
                <Col xs={12} md={4}>
                  <PopUpCorrectAnswer dataAnswers={item.tips} />
                </Col>
                
              </Row>
              <Row>
                <Col></Col>
               
                <Col xs={12} md={6}>
                  <Question dataQuestions={item} />
                </Col>
                <Col></Col>
              </Row>
              
            </Container>
          );
        })}
      </>
    );
  }
}
