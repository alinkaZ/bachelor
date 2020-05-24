import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./ButtonGroupAdmin.css";

export class ButtonGroupAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onLessonTypeChange: this.props.onLessonTypeChange,
    };
  }
  onButtonClick(data, event) {
    console.log(data, event);
    if (this.props.onLessonTypeChange) {
      this.props.onLessonTypeChange(data.type);
    }
    /*this.state.onLessonTypeChange()*/
  };

  render() {
    return (
      <ButtonGroup vertical>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this, {type:"text"})}>
          Text
        </Button>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this,{type:"video"})}>
          Video
        </Button>
        <Button className="btn-admin" onClick={this.onButtonClick.bind(this,{type:"quiz"})}>
          Quiz
        </Button>
      </ButtonGroup>
    );
  }
}
