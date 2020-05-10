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
import AddAnswerIcon from "../../Assets/plusAnswer.png";

export class Question extends Component {
  initValue;
  constructor(props) {
    super(props);

    this.state = props.data;
    this.initValue = props.data;

    console.log(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.changeQuestionTitle = this.changeQuestionTitle.bind(this);
    this.changeQuestionExplanation = this.changeQuestionExplanation.bind(this);
    this.onChangenewAnswer = this.onChangenewAnswer.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  addQuestion(event) {
    console.log(this.state);
    /*} this.setState({
      allQuestions = [...this.state.questions, this.state.newQuestion], 
      newQuestion: { name: "", answers: [] },
  });*/
    this.props.onAdd(this.state);
    this.setState (this.initValue);
    
  }

  addAnswer(event) {
    this.setState({
      answers: [...this.state.answers, this.state.newAnswer],
      newAnswer: { name: "", isRight: false },
    });
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

  handleCheckboxChange(event) {
    console.log(event.target.dataset.index, event.target.checked);
    if (event.target.dataset.index == undefined) {
      let answer = this.state.newAnswer;
      answer.isRight = event.target.checked;
      this.setState({
        newAnswer: answer,
      });
    } else {
      let data = this.state.answers;
      data[event.target.dataset.index * 1].isRight = Boolean(
        event.target.checked
      );
      this.setState({ answers: data });
    }
    console.log(this.state);
  }

  render() {
   /* const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Question key={i} number={i} />);
    }*/
    return (
      <div className="questionForm">
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
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={this.state.answers[index].isRight}
                    onChange={this.handleCheckboxChange}
                    data-index={index}
                  />
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
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                checked={this.state.newAnswer.isRight}
                onChange={this.handleCheckboxChange}
              />
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
            src={AddAnswerIcon}
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
        {this.props.onAdd != null &&
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">Add one more question</Tooltip>
          }
        >
          <img
            onClick={this.addQuestion}
            className="addQuestion"
            src={AddPictureIcon}
          />
        </OverlayTrigger>} 
      </div>
    );
  }
}
