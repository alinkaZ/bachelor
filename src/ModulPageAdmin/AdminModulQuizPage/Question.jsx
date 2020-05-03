import React, { Component } from "react";
import { WordInput } from "../CommonAdmin/WordInput";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import AddPictureIcon from "../../Assets/plus.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../AdminModulQuizPage/Question.css";

export class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numChildren: 0,
      name: "",
      explanation: "",
      answers: [],
      newAnswer: { name: "", isRight: false },
    };
    console.log(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.changeQuestionTitle = this.changeQuestionTitle.bind(this);
    this.changeQuestionExplanation = this.changeQuestionExplanation.bind(this);
    this.onChangenewAnswer = this.onChangenewAnswer.bind(this);
  }

  addQuestion(event) {
    console.log(this.state);
  }
  addAnswer(event) {
    this.setState({
      answers: [...this.state.answers, this.state.newAnswer],
      newAnswer: { name: "", isRight: false },
    });

    console.log(this);
  }
  changeQuestionTitle(event) {
    this.setState({ name: event.target.value });
  }
  changeQuestionExplanation(event) {
    this.setState({ explanation: event.target.value });
  }
  onChangenewAnswer(event) {
    if (event.target.dataset.index == undefined) {
      this.setState({
        newAnswer: {
          name: event.target.value,
          isRight: this.state.newAnswer.isRight,
        },
      });
    } else {
      let data = this.state.answers;
      data[event.target.dataset.index * 1].name = event.target.value;
      this.setState({ answers: data });
    }
  }
  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Question key={i} number={i} />);
    }
    return (
      <>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Type in your question</InputGroup.Text>
          </InputGroup.Prepend>

          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={this.state.name}
            onChange={this.changeQuestionTitle}
          />
        </InputGroup>
        {this.state.answers.map((item, index) => {
          return (
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">
                      Tick ​​the correct answer
                    </Tooltip>
                  }
                >
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </OverlayTrigger>
              </InputGroup.Prepend>

              <FormControl
                aria-label="Text input with checkbox"
                value={this.state.answers[index].name}
                onChange={this.onChangenewAnswer}
                data-index={index}
              />
            </InputGroup>
          );
        })}
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">Tick ​​the correct answer</Tooltip>
          }
        >
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>

            <FormControl
              aria-label="Text input with checkbox"
              value={this.state.newAnswer.name}
              onChange={this.onChangenewAnswer}
            />
          </InputGroup>
        </OverlayTrigger>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">Add one more answer option</Tooltip>
          }
        >
          <img
            className="addAnswer"
            onClick={this.addAnswer}
            src={AddPictureIcon}
          />
        </OverlayTrigger>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              Type in answer for the question and explanation
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            aria-label="With textarea"
            value={this.state.explanation}
            onChange={this.changeQuestionExplanation}
          />
        </InputGroup>
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">Add one more question</Tooltip>
          }
        >
          <img
            onClick={this.addQuestion}
            className="addAnswer"
            src={AddPictureIcon}
          />
        </OverlayTrigger>
      </>
    );
  }
}
