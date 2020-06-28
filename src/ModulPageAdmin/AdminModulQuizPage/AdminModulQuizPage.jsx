import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Breadcrumbs } from "../../ModulPage/Common/Breadcrumbs";
import { ButtonGroupAdmin } from "../CommonAdmin/ButtonGroupAdmin";
import { PaginationRow } from "../../ModulPage/Common/Pagination";
import { SaveDelete } from "../CommonAdmin/SaveDelete";
import { Question } from "../AdminModulQuizPage/Question";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { apiService } from "../../utils/API/apiService";

export class AdminModulDetailPageQuiz extends Component {
  constructor(props) {
    super(props);
  

    this.state = {
      name: props.info.name,
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
    let details = JSON.stringify({
      questions: [...this.state.questions, item],

      newQuestion: {
        name: "",
        explanation: "",
        answers: [],
        newAnswer: { name: "", isRight: false },
      },
    });
    this.setState({
      details:details,
      questions: [...this.state.questions, item],

      newQuestion: {
        name: "",
        explanation: "",
        answers: [],
        newAnswer: { name: "", isRight: false },
      },
    });
    console.log(this.state);
    if (this.props.onLessonChange) {
      this.props.onLessonChange(this.state);
    }
  };

  changeState = (event) => {
    let s = this.state;
    let field = event.target.id;
    s[field] = event.target.value;
    this.setState(s);
    if (this.props.onLessonChange) {
      this.props.onLessonChange(this.state);
    }
  };
  componentWillReceiveProps(value) {
    //debugger;
    console.log("Value", value);
    if (value.info) {
      this.setState({
        name: value.info.name,
        //details: value.info.details,
      });
    }
  }

  render() {
    return (
      <>
        <Row>
          <InputGroup>
            <FormControl
              as="textarea"
              aria-label="With textarea"
              value={this.state.name}
              onChange={this.changeState}
              id="name"
              rows="2"
            />
          </InputGroup>
        </Row>

        <Row>
          {this.state.questions.map((item, index) => {
            return <Question key={index} data={item} />;
          })}
        </Row>
        <Row>
          <Question data={this.state.newQuestion} onAdd={this.addNewQuestion} />
        </Row>
      </>
    );
  }
}
