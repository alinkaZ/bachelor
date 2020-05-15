import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "./Question.css";

export class Question extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Question">
        <p>{this.props.dataQuestions.question}</p>
        <p>Choose one correct answer</p>
        <Form>
          {this.props.dataQuestions.answers.map((item) => (
            <Form.Check
              type="radio"
              label={item.name}
              name={'answer'+this.props.dataQuestions.id+''+ item.id}
              id={'answer'+this.props.dataQuestions.id+''+ item.id}
            />
          ))}
        </Form>
      </div>
    );
  }
}
